const express = require("express");
const router = express.Router();
const {
  createPost,
  getAllPost,
  getOnePost,
  updatePost,
  deletePost,
} = require("../controllers/blog-controller");

router.post("/create", createPost);
router.get("/getall", getAllPost);
router.get("/blog_id", getOnePost);
router.post("/update", updatePost);
router.delete("/delete", deletePost);
module.exports = { router };
