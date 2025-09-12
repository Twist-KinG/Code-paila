
import Career from "../models/Career.js";

// Get all careers
export const getCareers = async (req, res) => {
    try {
        const careers = await Career.find().sort({ createdAt: -1 });
        res.status(200).json(careers);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Add new career
export const addCareer = async (req, res) => {
    try {
        const newCareer = new Career(req.body);
        await newCareer.save();
        res.status(201).json({ message: "Career added successfully", career: newCareer });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update career
export const updateCareer = async (req, res) => {
    try {
        const updatedCareer = await Career.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json({ message: "Career updated successfully", career: updatedCareer });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Delete career
export const deleteCareer = async (req, res) => {
    try {
        await Career.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Career deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
