const prisma = require("../utils/prisma");

const getAllProductsDb = async () =>
  await prisma.product.findMany({
    include: {
      category: true,
    },
  });

const getProductByIdDb = async (id) =>
  await prisma.product.findUnique({
    where: { id },
    include: { category: true },
  });

module.exports = {
  getAllProductsDb,
  getProductByIdDb,
};
