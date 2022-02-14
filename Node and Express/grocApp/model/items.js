const mongoose = require("mongoose");

const itemsScema = new mongoose.Schema({
  iName: {
    type: String,
    required: true,
  },
  iDesc: {
    type: String,
    required: true,
  },
  iPrice: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("items", itemsScema);
