import type { Request, Response } from "express";
import { getAllProducts, getProductById } from "./product.service.js";

export async function getProducts(req: Request, res: Response) {
  try {
    const products = await getAllProducts();
    res.json({ message: "Total products: " + products.length, products });
  } catch (err) {
    res.status(500).send("Database error");
  }
}


export async function getProductByIdController(req: Request, res: Response) {
  try {
    const id: string = req.params.id!;

    if (!id) {
      return res.status(400).json({ message: "Missing product id" });
    }

    const product = await getProductById(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(product);
  } catch (err) {
    res.status(500).send("Database error");
  }
}