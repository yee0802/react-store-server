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

export const createUserDb = async (username, passwordHash) =>
  await prisma.user.create({
    data: {
      username,
      passwordHash,
    },
    select: {
      id: true,
      username: true,
      email: true,
    },
  });
