import { Router } from "express";
import { getDashboardMetrics } from "../controllers/expenseController.js";
const router = Router();

router.get("/", getDashboardMetrics);

export default router;