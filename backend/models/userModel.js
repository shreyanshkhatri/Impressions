const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  userId: String,
});

module.exports = mongoose.model("User", userSchema);
