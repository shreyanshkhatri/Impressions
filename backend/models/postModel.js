const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: String,
    content: String,
    userId: String,
    username: String,
    likes: [{ type: String }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);
