const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

// 🔗 MongoDB connect
mongoose
  .connect("mongodb://127.0.0.1:27017/testDB")
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));

// 📦 Schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    min: 1,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

// 🧠 Model
const User = mongoose.model("User", userSchema);

// ➕ Create User API
app.post("/user", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.send(user);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

// 📥 Get Users
app.get("/user", async (req, res) => {
  const users = await User.find();
  res.send(users);
});

// 🚀 Server start
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
