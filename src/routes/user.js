import { Router } from "express";
import { createUser } from "../controllers/user.js";
import { login } from "../controllers/login.js";

const router = Router();

router.post("/register", createUser);
router.post("/login", login);

export default router;
