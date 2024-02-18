const prisma = require("../utils/prisma");

const getAllProductsDb = async () => await prisma.product.findMany();

module.exports = {
  getAllProductsDb,
};
