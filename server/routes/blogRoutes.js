import express from "express";
import { getAdminBlogs, addBlog, updateBlog, deleteBlog } from "../controllers/blogController.js";
import { protect } from "../middleware/AuthMiddleware.js";

const router = express.Router();

// Admin routes (protected)
router.use(protect);

router.get("/admin", getAdminBlogs);
router.post("/admin", addBlog);
router.put("/admin/:id", updateBlog);
router.delete("/admin/:id", deleteBlog);

export default router;
