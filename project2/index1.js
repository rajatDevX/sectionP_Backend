const mongoose = require("mongoose");

async function start() {
  // connect DB
  await mongoose.connect("mongodb://127.0.0.1:27017/testDB");
  console.log("✅ DB Connected");

  // schema
  const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
  });

  const User = mongoose.model("User", userSchema);

  // insert data
  const user = new User({
    name: "Rajat",
    age: 22,
  });

  await user.save();

  console.log("✅ Data Inserted");
}

start();
