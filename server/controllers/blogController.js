import Blog from "../models/Blog.js";

// Public blogs
export const getPublicBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find({ isPublic: true, status: "Published" })
            .sort({ createdAt: -1 });
        res.status(200).json(blogs);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// get blogs by ID
export const getBlogById = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) return res.status(404).json({ message: "Blog not found" });
        res.status(200).json(blog);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Admin blogs
export const getAdminBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find().sort({ createdAt: -1 });
        res.status(200).json(blogs);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Add blog
export const addBlog = async (req, res) => {
    try {
        const newBlog = new Blog(req.body);
        await newBlog.save();
        res.status(201).json(newBlog);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update blog
export const updateBlog = async (req, res) => {
    try {
        const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedBlog);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Delete blog
export const deleteBlog = async (req, res) => {
    try {
        await Blog.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Blog deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
