import Product from "../domains/products.js";

export const getAllProducts = async (req, res) => {
  try {
    const allProducts = await Product.getAllProducts();

    return res.status(200).send({ products: allProducts });
  } catch (e) {
    console.log("Error getting all products:", e.message);
    return res.status(e.status ?? 500).send({ error: e.message });
  }
};

export const getProductById = async (req, res) => {
  const id = Number(req.params.id);

  try {
    const foundProduct = await Product.getProductById(id);

    if (!foundProduct) {
      return res.status(404).send({ error: "No product found with given ID" });
    }

    return res.status(200).send({ product: foundProduct });
  } catch (e) {
    console.log("Error getting product with ID:", e.message);
    return res.status(e.status ?? 500).send({ error: e.message });
  }
};
