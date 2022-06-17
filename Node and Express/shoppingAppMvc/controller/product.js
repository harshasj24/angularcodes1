const product = require("../models/product");

const getAllData = async (req, res, next) => {
  try {
    const products = await product.find().lean();
    res.render("./products.handlebars", { products });
  } catch (err) {
    next(err);
  }
};

const addData = async (req, res, next) => {
  let { pName, pDesc, pPrice } = req.body;
  try {
    await product.insertMany([
      {
        pName,
        pDesc,
        pPrice,
      },
    ]);
    res.redirect("/products/products");
  } catch (err) {
    next(err);
  }
};

const editdataGet = async (req, res, next) => {
  let _id = req.params._id;
  try {
    let selectedPro = await product.findOne({ _id }).lean();
    res.render("./edit-products.handlebars", { selectedPro });
  } catch (err) {
    next(err);
  }
};
const editDataPost = async (req, res, next) => {
  let { _id, pName, pDesc, pPrice } = req.body;
  try {
    await product.updateOne(
      { _id },
      {
        $set: {
          pName,
          pDesc,
          pPrice,
        },
      }
    );
    res.redirect("/products/products");
  } catch (err) {
    next(err);
  }
};

const deleteData = async (req, res, next) => {
  let _id = req.params._id;
  try {
    await product.deleteOne({ _id });
    res.redirect("/products/products");
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllData,
  addData,
  editdataGet,
  editDataPost,
  deleteData,
};
