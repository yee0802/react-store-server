import express from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();
app.disable("x-powered-by");

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

import productsRouter from "./routes/products.js";
app.use("/products", productsRouter);

import categoriesRouter from "./routes/categories.js";
app.use("/categories", categoriesRouter);

import userRouter from "./routes/user.js";
app.use("/user", userRouter);

import profileRouter from "./routes/profile.js";
app.use("/profile", profileRouter);

import { createStripeCheckoutSession } from "./controllers/stripe.js";
import { verifyToken } from "./middleware/auth.js";
app.post("/create-checkout-session", verifyToken, createStripeCheckoutSession);

app.get("*", (req, res) => {
  res.status(404).send({
    status: "fail",
    data: {
      resource: "Not found",
    },
  });
});

export default app;
