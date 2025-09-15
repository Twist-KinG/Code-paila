import express from "express";
import { getCareers,  addCareer, updateCareer, deleteCareer, } from "../controllers/careerController.js";
import { protect } from "../middleware/AuthMiddleware.js";

const router = express.Router();

// All routes protected (admin only)
router.use(protect);

router.get("/", getCareers);        
router.post("/", addCareer);       
router.put("/:id", updateCareer);     
router.delete("/:id", deleteCareer);  

export default router;
