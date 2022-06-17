const express = require("express");
const router = express.Router();
const data = require("../controller/product");

router.get("/products", data.getAllData);

router.get("/add-products", (req, res) => {
  res.render("./add-products.handlebars");
});

router.post("/add-products", data.addData);

router.get("/edit-product/:_id", data.editdataGet);

router.post("/edit-products", data.editDataPost);

router.get("/delete-product/:_id", data.deleteData);

module.exports = router;
