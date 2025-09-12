import express from "express";
import { getPublicCareers } from "../controllers/careerController.js";

const router = express.Router();

// Public routes
router.get("/", getPublicCareers);

export default router;
