import type { Request, Response } from "express";
import { getAllProducts } from "./product.service.js";

export async function productController(req: Request, res: Response) {
  try {
    const products = await getAllProducts();
    res.json(products);
  } catch (err) {
    res.status(500).send("Database error");
  }
}
