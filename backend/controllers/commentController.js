const Comment = require("../models/commentModel");

exports.addComment = async (req, res) => {
  try {
    const { postId, userId, username, text } = req.body;
    const newComment = new Comment({ postId, userId, username, text });
    await newComment.save();
    res.json(newComment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getCommentsByPost = async (req, res) => {
  const comments = await Comment.find({ postId: req.params.postId });
  res.json(comments);
};
