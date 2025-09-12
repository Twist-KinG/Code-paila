import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./configs/db.js";
import adminRoutes from "./routes/adminRoutes.js";
import careerRoutes from "./routes/CareerRoutes.js";
import publicRoutes from "./routes/publicRoutes.js";

dotenv.config();
connectDB(); // connect to MongoDB

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

//publically avaiable routes
app.use("/api/careers", publicRoutes);


// admin Routes
app.use("/api/admin", adminRoutes);
//career routes
app.use("/api/admin/career", careerRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
