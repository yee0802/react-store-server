import prisma from "../utils/prisma.js";

export const updateProfileByUserIdDb = async (userId, dataToUpdate) =>
  await prisma.profile.update({
    where: { userId },
    data: dataToUpdate,
  });
