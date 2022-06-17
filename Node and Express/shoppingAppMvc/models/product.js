const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  pName: {
    type: String,
    required: true,
  },
  pDesc: {
    type: String,
    required: true,
  },
  pPrice: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("products", productSchema);
