
import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    summary: { type: String },
    image: { type: String }, 
    author: { type: String, default: "Admin" },
    tags: [{ type: String }],
    status: { type: String, enum: ["Draft", "Published"], default: "Published" },
    isPublic: { type: Boolean, default: true },
}, { timestamps: true });

export default mongoose.model("Blog", blogSchema);
