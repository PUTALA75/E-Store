const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;
const SECRET_KEY = process.env.JWT_SECRET || "supersecretkey";

const UserData = require('./models/User');

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Registration Route
app.post('/register', async (req, res) => {
  const { userName, email, password } = req.body;
  if (!userName || !email || !password) return res.status(400).json({ message: "All fields required" });

  try {
    const existingUser = await UserData.findOne({ email });
    if (existingUser) return res.status(409).json({ message: "User already exists" });

    const user = await UserData.create({ userName, email, password });
    res.status(201).json({ status: "Success", user });
  } catch (err) {
    res.status(500).json({ message: "Registration failed", error: err.message });
  }
});

// Login Route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserData.findOne({ email });
    if (!user) return res.status(404).json({ message: "No record found" });
    if (user.password !== password) return res.status(401).json({ message: "Incorrect password" });

    const token = jwt.sign({ id: user._id, email: user.email }, SECRET_KEY, { expiresIn: '1d' });
    res.status(200).json({ status: "Success", token });
  } catch (err) {
    res.status(500).json({ message: "Login failed", error: err.message });
  }
});

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
