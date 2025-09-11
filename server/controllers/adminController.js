import Admin from "../models/Admin.js";
import jwt from "jsonwebtoken";

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

// POST /api/admin/login
export const loginAdmin = async (req, res) => {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email });
    if (admin && (await admin.matchPassword(password))) {
        res.json({
            _id: admin._id,
            email: admin.email,
            token: generateToken(admin._id),
        });
    } else {
        res.status(401).json({ message: "Invalid email or password" });
    }
};

// GET /api/admin/profile
export const getAdminProfile = async (req, res) => {
    if (req.admin) {
        res.json({
            _id: req.admin._id,
            email: req.admin.email,
        });
    } else {
        res.status(404).json({ message: "Admin not found" });
    }
};
