const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  ufName: { type: String, required: true },
  ulName: { type: String, required: true },
  uEmail: { type: String, required: true },
  uPass: { type: String, required: true },
});

module.exports = mongoose.model("users", usersSchema);
