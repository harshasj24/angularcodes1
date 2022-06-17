const express = require("express");
const { updateOne } = require("../models/products");
const product = require("../models/products");

const getAllProducts = async (req, res, next) => {
  try {
    const products = await product.find().lean();
    res.json({
      products,
    });
  } catch (err) {
    next(err);
  }
};

const addProduct = async (req, res, next) => {
  let { _id, iName, iDesc, iPrice } = req.body;
  try {
    await product.insertMany([
      {
        iName,
        iDesc,
        iPrice,
      },
    ]);
    res.json({});
  } catch (err) {
    next(err);
  }
};

const editProduct = async (req, res, next) => {
  let { _id, iName, iDesc, iPrice } = req.body;
  try {
    await product.updateOne(
      { _id },
      {
        iName,
        iDesc,
        iPrice,
      }
    );
    res.json({
      error: false,
      message: "data updated sucessfully",
      data: null,
    });
  } catch (err) {
    next(err);
  }
};

const deleteItem = async (req, res, next) => {
  let { _id } = req.body;
  try {
    await product.deleteOne({ _id });
    res.json({
      error: false,
      message: "data deleted sucessfully",
      data: null,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllProducts,
  addProduct,
  editProduct,
  deleteItem,
};
