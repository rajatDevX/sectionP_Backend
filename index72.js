const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

const SECRET = "mysecretkey";

// DB connect
async function connectDB() {
  await mongoose.connect("mongodb://127.0.0.1:27017/authDB2");
  console.log("DB Connected");
}
connectDB();

// Schema
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
});

const User = mongoose.model("User", userSchema);

// ✅ SIGNUP
app.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const exist = await User.findOne({ email });
    if (exist) return res.send("User already exists ❌");

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ name, email, password: hashedPassword });
    await user.save();

    res.send("Signup success ✅");
  } catch (err) {
    res.send(err);
  }
});

// ✅ LOGIN
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.send("User not found ❌");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.send("Invalid password ❌");

    // JWT token
    const token = jwt.sign({ id: user._id }, SECRET, { expiresIn: "1h" });

    res.json({
      message: "Login success ✅",
      token,
    });
  } catch (err) {
    res.send(err);
  }
});

// ✅ Middleware (Protected Route)
function authMiddleware(req, res, next) {
  try {
    const token = req.headers.authorization;

    if (!token) return res.send("No token ❌");

    const decoded = jwt.verify(token, SECRET);
    req.userId = decoded.id;

    next();
  } catch (err) {
    res.send("Invalid token ❌");
  }
}

// ✅ Protected route
app.get("/profile", authMiddleware, async (req, res) => {
  const user = await User.findById(req.userId);
  res.json(user);
});

app.listen(3000, () => console.log("Server running 🚀"));
