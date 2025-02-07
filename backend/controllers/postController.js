const Post = require("../models/postModel");

exports.createPost = async (req, res) => {
  try {
    const { title, content, userId, username } = req.body;
    const newPost = new Post({ title, content, userId, username, likes: [] });
    await newPost.save();
    res.json(newPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllPosts = async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
};

exports.getPostById = async (req, res) => {
  const post = await Post.findById(req.params.postId);
  if (!post) return res.status(404).json({ message: "Post not found" });
  res.json(post);
};

exports.toggleLikePost = async (req, res) => {
  const { postId } = req.params;
  const { userId } = req.body;

  const post = await Post.findById(postId);
  if (!post) return res.status(404).json({ message: "Post not found" });

  const likeIndex = post.likes.indexOf(userId);
  if (likeIndex === -1) post.likes.push(userId);
  else post.likes.splice(likeIndex, 1);

  await post.save();
  res.json({ likes: post.likes.length, likedByUser: likeIndex === -1 });
};
