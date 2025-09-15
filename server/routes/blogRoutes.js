import express from "express";
import { getAdminBlogs, addBlog, updateBlog, deleteBlog } from "../controllers/blogController.js";
import { protect } from "../middleware/AuthMiddleware.js";

const router = express.Router();

// Admin routes (protected)
router.get("/admin", protect, getAdminBlogs);
router.post("/admin", protect, addBlog);
router.put("/admin/:id", protect, updateBlog);
router.delete("/admin/:id", protect, deleteBlog);

export default router;
