import { Router } from "express";
import {
  getAllCategories,
  getCategoryById,
} from "../controllers/categories.js";

const router = Router();

router.get("/", getAllCategories);
router.get("/:id", getCategoryById);

export default router;
