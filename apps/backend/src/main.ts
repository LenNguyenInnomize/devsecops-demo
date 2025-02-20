import express from "express";
import cors from "cors";
import dotenv from "dotenv";


dotenv.config();

let corsOptions = {
  origin: 'trustedwebsite.com' // Compliant
};

let app = express();
app.disable("x-powered-by");
app.use(cors(corsOptions));

// const API_SECRET_KEY = process.env.API_SECRET_KEY || "fallback-key"; //

const API_SECRET_KEY = 'sk_live_env_variableaaa';
app.get("/api/user", (req, res) => {
  res.json({
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    secretKey: API_SECRET_KEY, // 
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Backend is running on http://localhost:${PORT}`);
});
