
import express from "express";
import { protect } from "../middleware/AuthMiddleware.js";
import { signupAdmin, loginAdmin, addAdmin, getAllAdmins, getAdminProfile, updateAdminProfile, changeAdminPassword } from "../controllers/adminController.js";

const router = express.Router();

// Public routes
router.post("/signup", signupAdmin);
router.post("/login", loginAdmin);


// Protected routes
router.post("/", protect, addAdmin);
router.get("/list", protect, getAllAdmins);
router.get("/profile", protect, getAdminProfile);
router.put("/profile", protect, updateAdminProfile);
router.put("/change-password", protect, changeAdminPassword);

export default router;
