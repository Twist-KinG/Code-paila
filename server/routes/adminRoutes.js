import express from "express";
import Admin from "../models/Admin.js";
import jwt from "jsonwebtoken";
import { protect } from "../middleware/AuthMiddleware.js";

const router = express.Router();

// Generate JWT
const generateToken = (id) =>
    jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" });

router.post("/signup", async (req, res) => {
    const { name, email, password } = req.body;

    const adminExists = await Admin.findOne({ email });
    if (adminExists) return res.status(400).json({ message: "Admin already exists" });

    const admin = await Admin.create({ name, email, password });
    if (admin) {
        res.status(201).json({
            _id: admin._id,
            name: admin.name,
            email: admin.email,
            token: generateToken(admin._id),
        });
    } else {
        res.status(400).json({ message: "Invalid admin data" });
    }
});

router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email });
    if (admin && (await admin.matchPassword(password))) {
        res.json({
            _id: admin._id,
            name: admin.name,
            email: admin.email,
            token: generateToken(admin._id),
        });
    } else {
        res.status(401).json({ message: "Invalid email or password" });
    }
});


router.get("/profile", protect, async (req, res) => {
    res.json(req.admin);
});

export default router;
