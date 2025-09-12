
import mongoose from "mongoose";

const CareerSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        location: { type: String, required: true },
        type: { type: String, required: true },
        description: { type: String, required: true },
        status: { type: String, default: "Closed" },
    },
    { timestamps: true }
);

export default mongoose.model("Career", CareerSchema);
