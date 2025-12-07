import { Router } from "express";
import { getProductByIdController, getProducts } from "./product.controller.js"; //add .js when working with TypeScript + Node/Express

const router = Router();
router.get("/", getProducts); // GET /products
router.get("/:id", getProductByIdController); // GET /products/:id

export default router;
