const express = require("express");
const router = express.Router();
const fs = require("fs");

router.post("/blog", (req, res) => {
     const blog = req.body;
     let blogs = JSON.parse(fs.readFileSync("data/blogs.json"));
     blogs.push(blog);
     fs.writeFileSync("data/blogs.json", JSON.stringify(blogs, null, 2));
     res.redirect("/success.html?type=blog");
});

module.exports = router;


