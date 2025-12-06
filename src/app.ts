import express from "express";
import routes from "./route.js"; // centralized router
import { securityMiddleware } from "./Middlewares/security.js";

const app = express();

app.get("/", (req, res) => res.json({ status: "backend running" }));

if (process.env.NODE_ENV === "development") {
  app.use(securityMiddleware);
}

// Use centralized routes
app.use("/", routes);

export default app;
