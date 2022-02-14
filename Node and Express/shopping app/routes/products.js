const express = require("express");
const router = express.Router();
const fs = require("fs");

let products = [
  {
    _id: 1,
    pName: "bag",
    pDesc: "college bag",
    pPrice: 1500,
  },
];

router.get("/products", (req, res) => {
  products = JSON.parse(fs.readFileSync("data/pro.txt"));
  res.render("./products.handlebars", { products });
});

router.get("/add-products", (req, res) => {
  res.render("add-products.handlebars");
});

router.post("/add-products", (req, res) => {
  console.log(req.body);
  let { _id, pName, pDesc, pPrice, img } = req.body;
  _id = parseInt(_id);
  pPrice = parseInt(pPrice);
  products.push({
    _id,
    pName,
    pDesc,
    pPrice,
    img,
  });
  let append = () => {
    fs.writeFileSync("data/pro.txt", JSON.stringify(products), (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("appended");
      }
    });
  };

  fs.exists("data", (exists) => {
    if (!exists) {
      fs.mkdir("data", (err) => {
        if (err) {
          console.log("err");
        } else {
          console.log("Folder created sucessfully");
          append();
        }
      });
    } else {
      append();
      console.log("data has been appended sucessfully");
    }
  });

  res.redirect("/products/products");
});

router.get("/edit-product/:_id", (req, res) => {
  console.log(req.params._id);
  let _id = parseInt(req.params._id);
  console.log("_id", _id);
  const index = products.findIndex((product) => {
    return parseInt(product._id) === parseInt(_id);
  });
  console.log("index", index);
  const selectedPro = products[index];
  res.render("./edit-products.handlebars", { selectedPro });
});

router.post("/edit-products", (req, res) => {
  console.log(req.body);

  let { _id, pName, pDesc, pPrice } = req.body;
  _id = parseInt(_id);
  pPrice = parseInt(pPrice);
  const index = products.indexOf((pro) => {
    return pro._id === _id;
  });

  products.splice(index, 1, { _id, pName, pDesc, pPrice });
  res.redirect("/products/products");
  fs.writeFileSync("data/pro.txt", JSON.stringify(products));
});
router.get("/delete-product/:_id", (req, res) => {
  console.log(req.params);
  let _id = parseInt(req.params._id);
  console.log(_id);

  let newPro = products.filter((val) => {
    return parseInt(_id) !== parseInt(val._id);
  });
  products = [...newPro];
  console.log([products]);
  res.redirect("/products/products");
  fs.writeFileSync("data/pro.txt", JSON.stringify(products));
});

module.exports = router;
