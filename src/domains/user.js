import prisma from "../utils/prisma.js";

export const getUserByIdDb = async (id) =>
  await prisma.user.findUnique({
    where: { id },
    select: {
      id: true,
      username: true,
      email: true,
      savedItems: {
        select: {
          id: true,
          title: true,
          description: true,
          price: true,
          imageURL: true,
        },
      },
      profile: {
        select: {
          id: true,
          firstName: true,
          lastName: true,
          imageURL: true,
          bio: true,
        },
      },
    },
  });

export const getUserByEmailDb = async (email) =>
  await prisma.user.findUnique({
    where: { email },
    select: {
      id: true,
      username: true,
      passwordHash: true,
      email: true,
    },
  });

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

export const updateUserByIdDb = async (id, dataToUpdate) =>
  await prisma.user.update({
    where: { id },
    data: dataToUpdate,
    select: {
      id: true,
      username: true,
      email: true,
      savedItems: {
        select: {
          id: true,
          title: true,
          description: true,
          price: true,
          imageURL: true,
        },
      },
      profile: {
        select: {
          id: true,
          firstName: true,
          lastName: true,
          imageURL: true,
          bio: true,
        },
      },
    },
  });
