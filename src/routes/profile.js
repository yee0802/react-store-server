import { Router } from "express";
import { verifyToken } from "../middleware/auth.js";
import { updateProfileByUserId } from "../controllers/profile.js";

const router = Router();

router.patch("/:id", verifyToken, updateProfileByUserId);

export default router;
