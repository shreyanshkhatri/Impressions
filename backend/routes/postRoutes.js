const express = require("express");
const { createPost, getAllPosts, getPostById, toggleLikePost } = require("../controllers/postController");
const router = express.Router();

router.post("/", createPost);
router.get("/", getAllPosts);
router.get("/:postId", getPostById);
router.post("/:postId/like", toggleLikePost);

module.exports = router;
