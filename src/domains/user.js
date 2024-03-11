import prisma from "../utils/prisma";

export const getUserByUsernameDb = async (username) =>
  await prisma.user.findUnique({
    where: { username },
    select: {
      id: true,
      username: true,
      email: true,
    },
  });
