import mongoose from "mongoose";

const portfolioSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String },
    technologies: [{ type: String }],
    category: { type: String },
    stats: {
        users: String,
        rating: String,
        growth: String,
    },
    color: { type: String },
    liveLink: { type: String },
    githubLink: { type: String },

    status: { type: String, enum: ["Draft", "Published"], default: "Published" },
    isPublic: { type: Boolean, default: true },
}, { timestamps: true });

export default mongoose.model("Portfolio", portfolioSchema);
