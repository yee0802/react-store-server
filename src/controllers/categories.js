import {
  getAllCategoriesDb,
  getCategoryByIdDb,
} from "../domains/categories.js";
import throwNewError from "../error/index.js";

export const getAllCategories = async (req, res) => {
  try {
    const allCategories = await getAllCategoriesDb();

    return res.status(200).send({ categories: allCategories });
  } catch (e) {
    console.log("Error getting all categories:", e.message);
    return res.status(e.status ?? 500).send({ error: e.message });
  }
};

export const getCategoryById = async (req, res) => {
  try {
    const id = Number(req.params.id);

    if (isNaN(id)) {
      throwNewError("Invalid ID: Please provide a valid number", 400);
    }

    const foundCategory = await getCategoryByIdDb(id);

    if (!foundCategory) {
      throwNewError("No category found with given ID", 404);
    }

    return res.status(200).send({ category: foundCategory });
  } catch (e) {
    console.log("Error getting category by ID:", e.message);
    return res.status(e.status ?? 500).send({ error: e.message });
  }
};
