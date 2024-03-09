import prisma from "../utils/prisma.js";

export default class Product {
  constructor(
    id = null,
    title = null,
    description = null,
    price = null,
    imageURL = null,
    category = null
  ) {
    (this.id = id),
      (this.title = title),
      (this.description = description),
      (this.price = price),
      (this.imageURL = imageURL),
      (this.category = category);
  }

  static fromDb(product) {
    return new Product(
      product.id,
      product.title,
      product.description,
      product.price,
      product.imageURL,
      product.category
    );
  }

  static async _findMany() {
    return prisma.product.findMany({
      include: {
        category: {
          select: {
            id: true,
            name: true,
            imageURL: true,
          },
        },
      },
    });
  }

  static async _findUniqueWhere(key, value) {
    return prisma.product.findUnique({
      where: {
        [key]: value,
      },
      include: {
        category: {
          select: {
            id: true,
            name: true,
            imageURL: true,
          },
        },
      },
    });
  }

  static async getAllProducts() {
    const foundProducts = await Product._findMany();
    const allProducts = foundProducts.map(Product.fromDb);

    return allProducts;
  }

  static async getProductById(id) {
    const foundProduct = await Product._findUniqueWhere("id", id);

    if (!foundProduct) {
      return false;
    }

    const product = Product.fromDb(foundProduct);

    return product;
  }

  static async getProductsByIds(ids) {
    const foundProducts = await prisma.product.findMany({
      where: {
        id: { in: ids },
      },
      include: {
        category: {
          select: {
            id: true,
            name: true,
            imageURL: true,
          },
        },
      },
    });

    const allProducts = foundProducts.map(Product.fromDb);

    return allProducts;
  }
}
