const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

app.use(cookieParser());

app.get("/login", (req, res) => {
  res.cookie("user", "rahul");

  res.send("Cookie Set");
});

app.get("/profile", (req, res) => {
  const user = req.cookies.user;

  res.send("Welcome " + user);
});

app.listen(3000);
