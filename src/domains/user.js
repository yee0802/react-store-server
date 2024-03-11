import prisma from "../utils/prisma.js";

export const getUserByUsernameDb = async (username) =>
  await prisma.user.findUnique({
    where: { username },
    select: {
      id: true,
      username: true,
      email: true,
    },
  });

export const createUserDb = async (username, passwordHash, email) =>
  await prisma.user.create({
    data: {
      username,
      passwordHash,
      email,
    },
    select: {
      id: true,
      username: true,
      email: true,
    },
  });
