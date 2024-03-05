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

app.get("*", (req, res) => {
  res.status(404).json({
    status: "fail",
    data: {
      resource: "Not found",
    },
  });
});

export default app;
