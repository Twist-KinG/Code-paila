
import express from "express";
import {
    signupAdmin,
    loginAdmin,
    getAdminProfile,
    updateAdminProfile,
    changeAdminPassword
} from "../controllers/adminController.js";
import { protect } from "../middleware/AuthMiddleware.js";

const router = express.Router();

// Public routes
router.post("/signup", signupAdmin);
router.post("/login", loginAdmin);

// Protected routes
router.get("/profile", protect, getAdminProfile);
router.put("/profile", protect, updateAdminProfile);
router.put("/change-password", protect, changeAdminPassword);

export default router;
