const express = require("express");
const { redirect } = require("statuses");
const router = express.Router();

const product = require("../model/product");

router.get("/products", async (req, res) => {
  try {
    const products = await product.find().lean();
    res.render("./products.handlebars", { products });
  } catch {
    res.redirect("/error");
  }
});

router.get("/add-products", (req, res) => {
  res.render("./add-products.handlebars");
});

router.post("/add-products", async (req, res) => {
  console.log(req.body);

  let { pName, pDesc, pPrice } = req.body;
  pPrice = parseInt(pPrice);
  try {
    await product.insertMany([{ pName, pDesc, pPrice }]);
    res.redirect("/products/products");
  } catch {
    res.redirect("/error");
  }
});

router.get("/edit-product/:_id", async (req, res) => {
  try {
    let _id = req.params._id;
    console.log(_id);
    const selectedPro = await product.findOne({ _id }).lean();
    console.log(selectedPro);
    res.render("./edit-products.handlebars", { selectedPro });
  } catch {
    res.redirect("/error");
  }
});

router.post("/edit-product:_id", async (req, res) => {
  try {
    let { _id, pName, pDesc, pPrice } = req.body;
    pPrice = parseInt(pPrice);
    await product.updateOne({ _id }, { $set: { pName, pDesc, pPrice } });
    res.redirect("/products/products");
  } catch (err) {
    console.log(err);
    res.redirect("/error");
  }
});

router.get("/delete-product/:_id", async (req, res) => {
  console.log(req.params._id);
  try {
    await product.deleteOne({ _id: req.params._id });
    res.redirect("/products/products");
  } catch (err) {
    console.log(err);
    res.redirect("/error");
  }
});

module.exports = router;
