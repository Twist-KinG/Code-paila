import express from "express";
import { getPublicCareers } from "../controllers/careerController.js";
import { getPublicBlogs, getBlogById } from "../controllers/blogController.js";

const router = express.Router();

// Public routes
router.get("/careers", getPublicCareers);
router.get("/blogs", getPublicBlogs);
router.get("/blogs/:id", getBlogById);

export default router;
