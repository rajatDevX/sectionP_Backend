const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
app.use(cookieParser("mySuperSecretKey"));
app.get("/set", (req, res) => {
  res.cookie("user", "anuj", {
    maxAge: 1000 * 60 * 60, // 1 hour

    httpOnly: true, // JS access block

    secure: false, // HTTPS pe true karo

    signed: true, // 👈 signed cookie

    sameSite: "lax", // CSRF protection
  });

  res.send("Advanced signed cookie set");
});
app.get("/get", (req, res) => {
  res.send(req.cookies);
});
app.get("/delete", (req, res) => {
  res.clearCookie("name");
  res.send("Cookie deleted");
});

app.listen(3000);