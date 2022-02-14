const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
let port = 2550;
// cookie parser middle ware

app.use(cookieParser());
const oneDay = 60 * 60 * 1000 * 24;
app.get("/read-cookie", (req, res) => {
  console.log(req.cookies);
  res.send("cookies exixts" + JSON.stringify(req.cookies));
});

app.get("/create-cookie", (req, res) => {
  res.cookie("myName", "Harsha");
  res.send("a Non persistent cookie has been created");
});
app.get("/create-Ncookie", (req, res) => {
  res.cookie("company", "TechnoElevate");
  res.send("a Non persistent cookie has been created");
});

// creating an object cookies
app.get("/create-objcookies", (req, res) => {
  res.cookie(
    "data",
    {
      name: "harsha",
      email: "har@gmail.com",
      company: "Technoelevate",
    },
    {
      maxAge: oneDay,
    }
  );
  res.send("obj cookies has been created");
});

const arrObj = [
  {
    name: "harsha",
    email: "har@gmail.com",
    company: "Technoelevate",
  },
  {
    name: "sahana",
    email: "sah@gmail.com",
    company: "Technoelevate",
  },
  {
    name: "mahesh",
    email: "ma@gmail.com",
    company: "Technoelevate",
  },
  {
    name: "srinivas",
    email: "sri@gmail.com",
    company: "Technoelevate",
  },
];
app.get("/create-arrcookies", (req, res) => {
  res.cookie("data", arrObj, {
    maxAge: oneDay,
  });
  res.send("obj cookies has been created");
});

// crating one persistent cookie

app.get("/create-pcookie", (req, res) => {
  res.cookie("email", "har@gmail.inc", {
    maxAge: 60000,
  });
  res.send("persistent cookie has been created");
});

app.get("/clear-cookie", (req, res) => {
  res.clearCookie("myName");
  res.send("cookie deleted");
});
app.get("/clear-Allcookie", (req, res) => {
  for (const cookie in req.cookies) {
    res.clearCookie(cookie);
  }
  res.send("all the cookies has been deleted");
});
app.listen(port, () => {
  console.log(`server is listinig on port ${port}`);
});
