import { Router } from "express";
import productRoutes from "./Domains/product/product.routes.js";

const router = Router();

// register domain routes
router.use("/products", productRoutes);

export default router;