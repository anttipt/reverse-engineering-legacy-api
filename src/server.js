import express from "express";
import routes from "./routes/v1.js";

const app = express();
app.use(express.json());

// API routes
app.use("/v1", routes);

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Mock API running on port ${PORT}`);
});