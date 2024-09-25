const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  userName: String,
  color: String,
});

module.exports = mongoose.model("User", userSchema);
