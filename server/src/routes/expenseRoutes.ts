import { Router } from "express";
import { getExpensesByCategory } from "../controllers/dashboardController.js";

const router = Router();

router.get("/", getExpensesByCategory);

export default router;