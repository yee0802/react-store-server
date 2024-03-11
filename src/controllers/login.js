import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { getUserByEmailDb } from "../domains/user.js";
import throwNewError from "../error/index.js";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      throwNewError("Missing fields in request body", 400);
    }

    const foundUser = await getUserByEmailDb(email);
    const areCredentialsValid = await validateCredentials(foundUser, password);

    if (!areCredentialsValid) {
      throwNewError("Invalid email and/or password provided", 401);
    }

    const secret = process.env.JWT_SECRET;
    const token = jwt.sign({ username: foundUser.username }, secret);

    delete foundUser.passwordHash;

    return res.status(200).send({ token: token });
  } catch (e) {
    return res.status(e.status ?? 500).send({ error: e.message });
  }
};

const validateCredentials = async (user, password) => {
  if (!user) {
    return false;
  }

  if (!password) {
    return false;
  }

  const isPasswordValid = await bcrypt.compare(password, user.passwordHash);

  if (!isPasswordValid) {
    return false;
  }

  return true;
};
