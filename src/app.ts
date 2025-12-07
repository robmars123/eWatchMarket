import express from "express";
import routes from "./route.js"; // centralized router
import cors from "cors";
import { securityMiddleware } from "./Middlewares/security.js";

const app = express();

app.get("/", (req, res) => res.json({ status: "backend running" }));

if (process.env.NODE_ENV === "development") {
  app.use(securityMiddleware);
}

// Allow requests from React dev server - CORS
app.use(cors({
  origin: "http://localhost:5173", // or ["http://localhost:5173"]
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

// Use centralized routes
app.use("/", routes);

export default app;
