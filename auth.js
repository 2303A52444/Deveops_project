const express = require("express");
const router = express.Router();
const fs = require("fs");

// SIGNUP
router.post("/signup", (req, res) => {
     const users = JSON.parse(fs.readFileSync("data/users.json"));
     users.push(req.body);
     fs.writeFileSync("data/users.json", JSON.stringify(users, null, 2));
     res.redirect("/success.html?type=signup");
});

// LOGIN
router.post("/login", (req, res) => {
     const users = JSON.parse(fs.readFileSync("data/users.json"));
     const user = users.find(u => u.email === req.body.email && u.password === req.body.password);
     if (user) res.redirect("/success.html?type=login");
     else res.send("❌ Invalid login");
});

module.exports = router;