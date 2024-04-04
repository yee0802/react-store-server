import prisma from "../src/utils/prisma.js";
import fs from "fs";

function loadProductsJson() {
  const products = JSON.parse(
    fs.readFileSync("./dataset/products.json", "utf8")
  );

  return products;
}

function loadCategoriesJson() {
  const categories = JSON.parse(
    fs.readFileSync("./dataset/categories.json", "utf8")
  );

  return categories;
}

async function seed() {
  const categoryData = loadCategoriesJson();
  const productData = loadProductsJson();

  const createdCategories = await prisma.category.createMany({
    data: categoryData,
  });
  console.log("Created categories:", createdCategories.count);

  const createdProducts = await prisma.product.createMany({
    data: productData,
  });
  console.log("Created Products:", createdProducts.count);

  process.exit(0);
}

seed()
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
  })
  .finally(() => process.exit(1));
