const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
app.use(cookieParser());
app.get("/set", (req, res) => {
  res.cookie("name", "anuj");
  res.send("cookie has been set");
});
app.get("/get", (req, res) => {
  res.send(req.cookies);
});
app.get("/delete", (req, res) => {
  res.clearCookie("name");
  res.send("Cookie deleted");
});

app.listen(3000);
