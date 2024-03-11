import Product from "../domains/products.js";
import throwNewError from "../error/index.js";
import stripe from "../services/stripe.js";

const getProductIdToProductMap = async (itemsToBuy) => {
  const itemIds = itemsToBuy.map(({ id }) => parseInt(id));

  const allProductsByIds = await Product.getProductsByIds(itemIds);

  const productIdToProductMap = {};

  allProductsByIds.forEach((product) => {
    productIdToProductMap[product.id] = product;
  });

  return productIdToProductMap;
};

const verifyItems = async (itemsToBuy) => {
  if (
    !Array.isArray(itemsToBuy) ||
    itemsToBuy.length === 0 ||
    itemsToBuy.length > 20
  ) {
    throwNewError("Bad request", 400);
  }

  const uniqueIds = [];

  const productIdToProductMap = await getProductIdToProductMap(itemsToBuy);

  const verifiedItems = [];

  for (const item of itemsToBuy) {
    if (!item.id || !item.quantity) {
      throwNewError("Missing fields in request body", 400);
    }

    if (uniqueIds.includes(parseInt(item.id))) {
      throwNewError("One or more provided products have duplicate IDs", 400);
    }

    uniqueIds.push(parseInt(item.id));

    const foundProduct = productIdToProductMap[item.id];

    if (!foundProduct) {
      throwNewError("One or more provided products have not been found", 404);
    }

    const verifiedItem = {
      id: parseInt(item.id),
      quantity: parseInt(item.quantity),
      name: foundProduct.title,
      price: foundProduct.price,
    };

    verifiedItems.push(verifiedItem);
  }

  return verifiedItems;
};

export const createStripeCheckoutSession = async (req, res) => {
  try {
    const verifiedItems = await verifyItems(req.body);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: verifiedItems.map((item) => {
        return {
          price_data: {
            currency: "gbp",
            product_data: {
              name: item.name,
            },
            unit_amount: item.price * 100,
          },
          quantity: item.quantity,
        };
      }),
      success_url: `${process.env.CLIENT_URL}/payment-successful`,
      cancel_url: `${process.env.CLIENT_URL}/payment-cancelled`,
    });

    return res.status(200).send({ url: session.url });
  } catch (e) {
    console.log("Error creating Stripe checkout session:", e.message);
    return res.status(e.status ?? 500).send({ error: e.message });
  }
};
