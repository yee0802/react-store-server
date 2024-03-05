import Category from "../domains/categories.js";

export const getAllCategories = async (req, res) => {
  try {
    const allCategories = await Category.getAllCategories();

    return res.status(200).send({ categories: allCategories });
  } catch (e) {
    console.log("Error getting all categories:", e.message);
    return res.status(e.status ?? 500).send({ error: e.message });
  }
};
