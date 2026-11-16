const express = require("express");
const app = express();
const fs = require("fs");

// IMPORT ROUTES
const authRoutes = require("./Routes/auth");     // signup, login
const donateRoutes = require("./Routes/donate"); // donate
const needRoutes = require("./Routes/need");     // need
const blogRoutes = require("./Routes/blog");     // blog posts

// MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// USE ROUTES with /auth prefix
app.use("/auth", authRoutes);   // /auth/signup, /auth/login
app.use("/auth", donateRoutes); // /auth/donate
app.use("/auth", needRoutes);   // /auth/need
app.use("/auth", blogRoutes);   // /auth/blog

// ADMIN DATA (for admin.html)
app.get("/admin-data", (req, res) => {
     const users = JSON.parse(fs.readFileSync("data/users.json"));
     const donors = JSON.parse(fs.readFileSync("data/donors.json"));
     const requests = JSON.parse(fs.readFileSync("data/requests.json"));
     const blogs = JSON.parse(fs.readFileSync("data/blogs.json"));
     const count = JSON.parse(fs.readFileSync("data/count.json"));

     res.json({ users, donors, requests, blogs, count });
});

// START SERVER
app.listen(3000, () => {
     console.log("🔥 Server running on http://localhost:3000");
});