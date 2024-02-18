const { getAllProductsDb } = require("../domains/products");

const getAllProducts = async (req, res) => {
  try {
    const allProducts = await getAllProductsDb();

    return res.status(200).send({ data: allProducts });
  } catch (e) {
    console.log("Error getting all products:", e.message);
    return res.status(e.status ?? 500).send({ error: e.message });
  }
};

module.exports = {
  getAllProducts,
};
