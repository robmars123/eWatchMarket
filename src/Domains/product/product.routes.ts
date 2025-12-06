import { Router } from "express";
import { productController } from "./product.controller.js"; //add .js when working with TypeScript + Node/Express

const router = Router();
router.get("/", productController);

export default router;
