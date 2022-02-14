const express = require("express");
const exphbs = require("express-handlebars");

const router = express.Router();

const user = require("../model/user");
const items = require("../model/items");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const oneDay = 24 * 60 * 60 * 1000;

router.use(
  session({
    secret: "asecreatkey",
    saveUninitialized: true,
    resave: false,
    cookie: { oneDay },
  })
);
router.get("/sign-up", (req, res) => {
  res.render("./login.handlebars");
});

router.post("/sign-up", async (req, res) => {
  console.log(req.body);
  let { ufName, ulName, uEmail, uPass } = req.body;
  try {
    await user.insertMany([
      {
        ufName,
        ulName,
        uEmail,
        uPass,
      },
    ]);
    res.send(`<h1>Rigister Sucessfully please <a href="/">login</a></h1>`);
  } catch {
    res.send("/error");
  }
});
let name = "";

router.get("/dashbord", async (req, res) => {
  if (req.session.userId) {
    try {
      const item = await items.find().lean();
      res.render("./dashbord.handlebars", { item, name });
    } catch {
      res.send("dashbord error");
    }
  } else {
    res.redirect("/");
  }
});
router.post("/login", async (req, res) => {
  console.log("r", req.body);
  let { uEmail, uPass } = req.body;
  try {
    // const item = await items.find().lean();
    const data = await user.find({ uEmail: { $eq: uEmail } }).lean();

    // const name = user.find({ uEmail }, { ufName: 1, ulName: 1 }).lean();
    console.log("datas", data.length);
    if (data.length > 0) {
      data.map((val) => {
        console.log("data of val ", val);
        if (val.uEmail === uEmail && val.uPass === uPass) {
          console.log(val.uEmail, uEmail);
          req.session.userId = val.uEmail;
          name = val.ufName + " " + val.ulName;
          res.redirect("/user/dashbord");
        } else {
          res.redirect("/");
        }
      });
    } else {
      res.send("INVALID USER DETAILS!");
    }

    // res.send();
  } catch (err) {
    console.log(err);
    res.send("post error");
  }
});

router.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/");
});

router.post("/add-item", async (req, res) => {
  console.log(req.body);
  let { _id, iName, iDesc, iPrice } = req.body;
  iPrice = parseInt(iPrice);
  try {
    await items.insertMany([
      {
        iName,
        iDesc,
        iPrice,
      },
    ]);
    res.redirect("/user/dashbord");
  } catch {
    res.send("/error");
  }
});

router.get("/edit-item/:_id", async (req, res) => {
  let _id = req.params._id;

  try {
    const item = await items.findOne({ _id }).lean();

    res.render("./edit-items.handlebars", { item });
  } catch (err) {
    console.log(err);
    res.redirect("/error");
  }
});

router.post("/edit-item", async (req, res) => {
  let { _id, iName, iDesc, iPrice } = req.body;

  try {
    iPrice = parseInt(iPrice);
    await items.updateOne(
      { _id },
      {
        $set: {
          iName,
          iDesc,
          iPrice,
        },
      }
    );

    res.redirect("/user/dashbord");
  } catch {
    res.redirect("/error");
  }
});
router.get("/delete-item/:_id", async (req, res) => {
  let _id = req.params._id;
  try {
    await items.deleteOne({ _id });
    res.redirect("/user/dashbord");
  } catch {
    res.redirect("/error");
  }
});

module.exports = router;
