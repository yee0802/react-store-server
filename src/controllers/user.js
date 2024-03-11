import bcrypt from "bcrypt";
import { createUserDb, getUserByUsernameDb } from "../domains/user.js";

export const createUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      const error = new Error("Missing fields in request body");
      error.status = 400;
      throw error;
    }

    const usernameIsDuplicate = await getUserByUsernameDb(username);

    if (usernameIsDuplicate) {
      const error = new Error(
        "A user with the provided username already exists"
      );
      error.status = 400;
      throw error;
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const createdUser = await createUserDb(username, hashedPassword);

    return res.status(201).send({ user: createdUser });
  } catch (e) {
    console.log("Error registering user:", e.message);
    return res.status(e.status ?? 500).send({ error: e.message });
  }
};
