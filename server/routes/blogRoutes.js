import express from "express";
import { getAdminBlogs, addBlog, updateBlog, deleteBlog } from "../controllers/blogController.js";
import { protect } from "../middleware/AuthMiddleware.js";

const router = express.Router();

// Admin routes (protected)
router.use(protect);

router.get("/", getAdminBlogs);
router.post("/", addBlog);
router.put("/:id", updateBlog);
router.delete("/:id", deleteBlog);

export default router;
