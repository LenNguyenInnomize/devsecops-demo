import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// Load environment variables từ .env
dotenv.config();

const app = express();
app.use(cors());

const API_SECRET_KEY = process.env.API_SECRET_KEY || "fallback-key"; // ✅ Load từ .env

app.get("/api/user", (req, res) => {
  res.json({
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    secretKey: API_SECRET_KEY, // ⚠️ Vẫn leak key trong response để Sonar bắt lỗi
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Backend is running on http://localhost:${PORT}`);
});
