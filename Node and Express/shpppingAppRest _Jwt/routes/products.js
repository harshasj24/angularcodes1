const express = require("express");
const router = express.Router();

const allProducts = require("../controller/product");

const auth = require("../middlewares/auth");

router.get("/items", auth.authoriseduseradmin, allProducts.getAllProducts);
router.post("/add-items", auth.authorisedadmin, allProducts.addProduct);
router.put("/edit-items", allProducts.editProduct);
router.delete("/delete-items", allProducts.deleteItem);
module.exports = router;
