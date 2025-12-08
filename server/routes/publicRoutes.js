import express from "express";
import { getPublicCareers } from "../controllers/careerController.js";
import { getPublicBlogs, getBlogById } from "../controllers/blogController.js";
import { getPublicPortfolio,getPortfolioById } from "../controllers/portfolioController.js";

const router = express.Router();

// Public routes
router.get("/careers", getPublicCareers);
router.get("/blogs", getPublicBlogs);
router.get("/blogs/:id", getBlogById);
router.get("/portfolio", getPublicPortfolio);
router.get("/portfolio/:id", getPortfolioById);

export default router;
