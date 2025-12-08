import Portfolio from "../models/Portfolio.js";


export const getPublicPortfolio = async (req, res) => {
    try {
        const projects = await Portfolio.find({ status: "Published", isPublic: true })
            .sort({ createdAt: -1 });
        res.status(200).json(projects);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


export const getPortfolioById = async (req, res) => {
    try {
        const project = await Portfolio.findById(req.params.id);
        if (!project) return res.status(404).json({ message: "Project not found" });
        res.status(200).json(project);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


export const getAdminPortfolio = async (req, res) => {
    try {
        const projects = await Portfolio.find().sort({ createdAt: -1 });
        res.status(200).json(projects);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


export const addPortfolio = async (req, res) => {
    try {
        const newItem = new Portfolio(req.body);
        await newItem.save();
        res.status(201).json(newItem);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


export const updatePortfolio = async (req, res) => {
    try {
        const updatedItem = await Portfolio.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.status(200).json(updatedItem);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


export const deletePortfolio = async (req, res) => {
    try {
        await Portfolio.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Portfolio deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
