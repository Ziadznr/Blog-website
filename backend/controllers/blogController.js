const Blog = require("../models/Blog");

// Get all blogs
exports.getAllBlogs = async(req, res) => {
    try {
        const blogs = await Blog.find().sort({ createdAt: -1 });
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json({ message: "Error fetching blogs", error });
    }
};

// Create a new blog
exports.createBlog = async(req, res) => {
    try {
        const { title, content, image } = req.body;

        const blog = new Blog({ title, content, image });
        await blog.save();

        res.status(201).json(blog);
    } catch (error) {
        res.status(500).json({ message: "Error creating blog", error });
    }
};

// Update a blog
exports.updateBlog = async(req, res) => {
    try {
        const { id } = req.params;
        const updatedBlog = await Blog.findByIdAndUpdate(id, req.body, { new: true });

        if (!updatedBlog) return res.status(404).json({ message: "Blog not found" });

        res.status(200).json(updatedBlog);
    } catch (error) {
        res.status(500).json({ message: "Error updating blog", error });
    }
};

// Delete a blog
exports.deleteBlog = async(req, res) => {
    try {
        const { id } = req.params;
        const deletedBlog = await Blog.findByIdAndDelete(id);

        if (!deletedBlog) return res.status(404).json({ message: "Blog not found" });

        res.status(200).json({ message: "Blog deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting blog", error });
    }
};