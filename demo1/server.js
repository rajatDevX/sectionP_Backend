const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

app.use(express.json());
app.use(cookieParser());

app.post("/login", (req, res) => {
  const user = {
    id: 1,
    name: "Rahul",
  };

  res.cookie("user", JSON.stringify(user), {
    httpOnly: true,
  });

  res.send("Login successful, cookie set");
});

app.get("/profile", (req, res) => {
  const userCookie = req.cookies.user;

  if (!userCookie) {
    return res.send("Not logged in");
  }

  const user = JSON.parse(userCookie);

  res.send(`Welcome ${user.name}`);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
