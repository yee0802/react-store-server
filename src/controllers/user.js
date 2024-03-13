import bcrypt from "bcrypt";
import {
  createUserDb,
  getUserByEmailDb,
  getUserByUsernameDb,
} from "../domains/user.js";
import throwNewError from "../error/index.js";

export const getUserById = async (req, res) => {
  try {
    const foundUser = req.user;

    return res.status(200).send({ user: foundUser });
  } catch (e) {
    console.log("Error finding user by ID:", e.message);
    return res.status(e.status ?? 500).send({ error: e.message });
  }
};

export const createUser = async (req, res) => {
  try {
    const { username, password, email } = req.body;

    if (!username || !password || !email) {
      throwNewError("Missing fields in request body", 400);
    }

    if (
      typeof username !== "string" ||
      typeof password !== "string" ||
      typeof email !== "string"
    ) {
      throwNewError("Bad request", 400);
    }

    const usernameIsDuplicate = await getUserByUsernameDb(username);
    const emailIsDuplicate = await getUserByEmailDb(email);

    if (usernameIsDuplicate || emailIsDuplicate) {
      throwNewError(
        "A user with the provided username and/or email already exists",
        400
      );
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const createdUser = await createUserDb(username, hashedPassword, email);

    return res.status(201).send({ user: createdUser });
  } catch (e) {
    console.log("Error registering user:", e.message);
    return res.status(e.status ?? 500).send({ error: e.message });
  }
};
