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

export const getCategoryById = async (req, res) => {
  const id = Number(req.params.id);

  if (isNaN(id)) {
    return res
      .status(401)
      .send({ error: "Invalid ID: Please provide a valid number" });
  }

  try {
    const foundCategory = await Category.getCategoryById(id);

    if (!foundCategory) {
      return res.status(404).send({ error: "No category found with given ID" });
    }

    return res.status(200).send({ category: foundCategory });
  } catch (e) {
    console.log("Error getting category by ID:", e.message);
    return res.status(e.status ?? 500).send({ error: e.message });
  }
};
