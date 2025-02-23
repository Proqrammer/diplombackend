const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors({
  origin: ["http://localhost:3000", "http://localhost:3001" , "http://localhost:3002" ], 
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));


const connectDB = require("./config/db");
connectDB();


const authRoutes = require("./routes/authRoutes");
const adminRoutes = require("./routes/adminRoutes");
const addressRoutes = require("./routes/addressRoutes");



app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/addresses", addressRoutes);

app.get("/", (req, res) => {
  res.send("API Çalışıyor!");
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server ${PORT} portunda çalışıyor...`);
});
