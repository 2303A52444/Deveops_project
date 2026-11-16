const express = require("express");
const router = express.Router();
const fs = require("fs");

router.post("/need", (req, res) => {
     const request = req.body;
     let requests = JSON.parse(fs.readFileSync("data/requests.json"));
     requests.push(request);
     fs.writeFileSync("data/requests.json", JSON.stringify(requests, null, 2));
     res.redirect("/success.html?type=need");
});

module.exports = router;