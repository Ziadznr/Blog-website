const express = require("express");
const {
    getAllBlogs,
    createBlog,
    updateBlog,
    deleteBlog,
} = require("../controllers/blogController");

const router = express.Router();

// Get all blogs
router.get("/", getAllBlogs);

// Create a new blog
router.post("/", createBlog);

// Update a blog by ID
router.put("/:id", updateBlog);

// Delete a blog by ID
router.delete("/:id", deleteBlog);

module.exports = router;