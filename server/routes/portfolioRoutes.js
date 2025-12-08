import express from "express";
import {
    getAdminPortfolio,
    addPortfolio,
    updatePortfolio,
    deletePortfolio
} from "../controllers/portfolioController.js";
import { protect } from "../middleware/AuthMiddleware.js";

const router = express.Router();

router.use(protect);

router.get("/", getAdminPortfolio);
router.post("/", addPortfolio);
router.put("/:id", updatePortfolio);
router.delete("/:id", deletePortfolio);

export default router;
