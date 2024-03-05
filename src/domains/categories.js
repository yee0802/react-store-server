import prisma from "../utils/prisma.js";

export default class Category {
  constructor(id = null, name = null, imageURL = null, products) {
    (this.id = id),
      (this.name = name),
      (this.imageURL = imageURL),
      (this.products = products);
  }

  static fromDb(category) {
    return new Category(
      category.id,
      category.name,
      category.imageURL,
      category?.products
    );
  }

  static async _findMany() {
    return prisma.category.findMany();
  }

  static async _findUniqueWhere(key, value) {
    return prisma.category.findUnique({
      where: { [key]: value },
      include: {
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
  }

  static async getAllCategories() {
    const allCategories = await Category._findMany();

    const categories = allCategories.map(Category.fromDb);

    return categories;
  }

  static async getCategoryById(id) {
    const foundCategory = await Category._findUniqueWhere("id", id);

    if (!foundCategory) {
      return false;
    }

    const category = Category.fromDb(foundCategory);

    return category;
  }
}
