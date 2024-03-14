import { getAllProductsDb, getProductByIdDb } from "../domains/products.js";
import throwNewError from "../error/index.js";

export const getAllProducts = async (req, res) => {
  try {
    const allProducts = await getAllProductsDb();

    return res.status(200).send({ products: allProducts });
  } catch (e) {
    console.log("Error getting all products:", e.message);
    return res.status(e.status ?? 500).send({ error: e.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const id = Number(req.params.id);

    if (isNaN(id)) {
      throwNewError("Invalid ID: Please provide a valid number", 400);
    }

    const foundProduct = await getProductByIdDb(id);

    if (!foundProduct) {
      throwNewError("No product found with provided ID", 404);
    }

    return res.status(200).send({ product: foundProduct });
  } catch (e) {
    console.log("Error getting product with ID:", e.message);
    return res.status(e.status ?? 500).send({ error: e.message });
  }
};
