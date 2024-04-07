const Sequelize = require("sequelize");
const { Blog } = require("../model/blog-model");

const createPost = (req, res) => {
  const blogPost = {
    category: req.body.category,
    title: req.body.title,
    content: req.body.content,
    image: req.body.image,
  };

  Blog.create(blogPost)
    .then((post) => {
      res.status(200).json({ post, message: "post created successfully" });
      console.log(post);
    })
    .catch((err) => {
      console.log(err);
    });
};

const getAllPost = (req, res) => {
  Blog.findAll()
    .then((post) => {
      res.status(200).json({ post, message: "successful" });
     //  console.log(post);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json("Internal Server Error");
    });
};

const getOnePost = (req, res) => {
  const blog_id = req.query.blog_id;
  console.log(blog_id);
  console.log(req);
  Blog.findByPk(blog_id)
    .then((post) => {
     //  console.log(post);
      if (!post) {
        return res.status(404).json({ message: "Blog post not found" });
      }
      res.status(200).json({ post, message: "Successful" });
    })
    .catch((err) => {
      console.error("Error retrieving blog post:", err);
      res.status(500).json({ message: "Internal Server Error" });
    });
};

const updatePost = (req, res) =>{
const blog_id = req.query.blog_id;
 Blog.update(req.body, { where: { blog_id: blog_id}})
    .then((post) => {
     //  console.log(post);
      if (!post) {
        return res.status(404).json({ message: "Blog post not found" });
      }
      res.status(200).json({ post, message: "Successful" });
    })
    .catch((err) => {
      console.error("Error retrieving blog post:", err);
      res.status(500).json({ message: "Internal Server Error" });
    });
};

const deletePost =(req, res) =>{
const blog_id = req.query.blog_id;
 Blog.destroy({ where: { blog_id: blog_id } })
   .then((post) => {
     // console.log(post);
     if (!post) {
       return res.status(404).json({ message: "Blog post not found" });
     }
     res.status(200).json({ post, message: "Successful" });
   })
   .catch((err) => {
     console.error("Error retrieving blog post:", err);
     res.status(500).json({ message: "Internal Server Error" });
   });
}

module.exports = { createPost, getAllPost, getOnePost, updatePost, deletePost };


