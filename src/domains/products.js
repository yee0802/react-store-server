const prisma = require("../utils/prisma");

const getAllProductsDb = async () =>
  await prisma.product.findMany({
    include: {
      category: true,
    },
  });

module.exports = {
  getAllProductsDb,
};
