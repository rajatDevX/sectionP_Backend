const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

// 🔗 DB connect
mongoose
  .connect("mongodb://127.0.0.1:27017/testDB")
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));

// 📦 Schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, min: 1 },
  email: { type: String, required: true, unique: true },
});

const User = mongoose.model("User", userSchema);

// 📄 Pagination API
app.get("/users", async (req, res) => {
  try {
    // query params se page & limit lo
    const page = parseInt(req.query.page) || 1; // default 1
    const limit = parseInt(req.query.limit) || 5; // default 5

    const skip = (page - 1) * limit;

    // async/await use ho raha hai yahan 👇
    const users = await User.find().skip(skip).limit(limit);

    const total = await User.countDocuments();

    res.status(200).json({
      page,
      limit,
      total,
      users,
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// 🚀 server start
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
