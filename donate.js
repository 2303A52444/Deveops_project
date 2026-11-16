const express = require("express");
const router = express.Router();
const fs = require("fs");

router.post("/donate", (req, res) => {
     const donor = req.body;
     let donors = JSON.parse(fs.readFileSync("data/donors.json"));
     donors.push(donor);
     fs.writeFileSync("data/donors.json", JSON.stringify(donors, null, 2));
     res.redirect("/success.html?type=donate");
});

module.exports = router;

