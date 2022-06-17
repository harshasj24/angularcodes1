const express = require("express");
const router = express.Router();

const allProducts = require("../controller/product");

router.get("/items", allProducts.getAllProducts);
router.post("/add-items", allProducts.addProduct);
router.put("/edit-items", allProducts.editProduct);
router.delete("/delete-items", allProducts.deleteItem);
module.exports = router;
