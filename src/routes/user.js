import { Router } from "express";
import {
  createUser,
  getUserById,
  updateUserById,
} from "../controllers/user.js";
import { login } from "../controllers/login.js";
import { verifyToken } from "../middleware/auth.js";

const router = Router();

router.get("/:id", verifyToken, getUserById);
router.patch("/:id", verifyToken, updateUserById);

router.post("/register", createUser);
router.post("/login", login);

export default router;
