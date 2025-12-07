import { Router } from "express";
import productRoutes from "./Domain/product/product.routes.js";

const router = Router();

// register domain routes
router.use("/products", productRoutes);

export default router;