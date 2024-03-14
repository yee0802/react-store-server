import prisma from "../utils/prisma.js";

export const getAllCategoriesDb = async () =>
  await prisma.category.findMany({
    select: {
      id: true,
      name: true,
      imageURL: true,
    },
  });

export const getCategoryByIdDb = async (id) =>
  await prisma.category.findUnique({
    where: { id },
    select: {
      id: true,
      name: true,
      imageURL: true,
      products: {
        select: {
          id: true,
          title: true,
          description: true,
          imageURL: true,
          price: true,
        },
      },
    },
  });
