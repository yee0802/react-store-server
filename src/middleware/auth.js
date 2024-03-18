import jwt from "jsonwebtoken";
import throwNewError from "../error/index.js";
import { getUserByIdDb } from "../domains/user.js";

export const verifyToken = async (req, res, next) => {
  try {
    const header = req.header("authorization");

    if (!header) {
      throwNewError("Missing auth token", 400);
    }

    const [_, token] = header.split(" ");

    const secret = process.env.JWT_SECRET;
    const verifiedToken = jwt.verify(token, secret);

    const foundUser = await getUserByIdDb(verifiedToken.userId);

    if (!foundUser) {
      throwNewError("No user found with provided ID", 404);
    }

    req.user = foundUser;

    next();
  } catch (e) {
    return res
      .status(e.status ?? 500)
      .send({ error: e.message ?? "Invalid credentials" });
  }
};
