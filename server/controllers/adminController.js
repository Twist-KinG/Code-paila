
import Admin from "../models/Admin.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

// Generate JWT
const generateToken = (id) =>
    jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" });

// Signup
export const signupAdmin = async (req, res) => {
    const { name, email, password } = req.body;

    const adminExists = await Admin.findOne({ email });
    if (adminExists)
        return res.status(400).json({ message: "Admin already exists" });

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
};

// Login
export const loginAdmin = async (req, res) => {
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
};

// Add new admin
export const addAdmin = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        const existing = await Admin.findOne({ email });
        if (existing) {
            return res.status(400).json({ message: "Email already in use" });
        }

        const admin = await Admin.create({ name, email, password, role });
        res.status(201).json({ message: "Admin created successfully", admin });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

// Get all admins
export const getAllAdmins = async (req, res) => {
    try {
        const admins = await Admin.find({});
        res.json(admins);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
}

// Get profile
export const getAdminProfile = async (req, res) => {
    res.json(req.admin);
};

// Update profile (no file upload)
export const updateAdminProfile = async (req, res) => {
    try {
        const admin = await Admin.findById(req.admin._id);
        if (!admin) return res.status(404).json({ message: "Admin not found" });

        const { name, email, phone, dob } = req.body;

        if (name) admin.name = name;
        if (email) admin.email = email;
        if (phone) admin.phone = phone;
        if (dob) admin.dob = dob;

        await admin.save();
        res.json({ message: "Profile updated successfully", admin });
    } catch (err) {
        console.error("Update admin profile error:", err);
        res.status(500).json({ message: "Server error" });
    }
};

// Change password
export const changeAdminPassword = async (req, res) => {
    const { oldPassword, newPassword } = req.body;
    const admin = await Admin.findById(req.admin._id);
    if (!admin) return res.status(404).json({ message: "Admin not found" });

    const isMatch = await bcrypt.compare(oldPassword, admin.password);
    if (!isMatch) return res.status(400).json({ message: "Old password is incorrect" });

    const salt = await bcrypt.genSalt(10);
    admin.password = await bcrypt.hash(newPassword, salt);
    await admin.save();

    res.json({ message: "Password changed successfully" });
};
