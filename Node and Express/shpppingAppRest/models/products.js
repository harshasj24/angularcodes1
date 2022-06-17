const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productsSchema = Schema({
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

module.exports = mongoose.model("items", productsSchema);
