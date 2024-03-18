import prisma from "../utils/prisma.js";

export const getAllProductsDb = async () =>
  await prisma.product.findMany({
    select: {
      id: true,
      title: true,
      description: true,
      price: true,
      imageURL: true,
      category: {
        select: {
          id: true,
          name: true,
          imageURL: true,
        },
      },
    },
  });

export const getProductByIdDb = async (id) =>
  await prisma.product.findUnique({
    where: { id },
    select: {
      id: true,
      title: true,
      description: true,
      price: true,
      imageURL: true,
      category: {
        select: {
          id: true,
          name: true,
          imageURL: true,
        },
      },
    },
  });

export const getProductsByIdsDb = async (ids) =>
  await prisma.product.findMany({
    where: {
      id: { in: ids },
    },
    select: {
      id: true,
      title: true,
      description: true,
      price: true,
      imageURL: true,
      category: {
        select: {
          id: true,
          name: true,
          imageURL: true,
        },
      },
    },
  });
