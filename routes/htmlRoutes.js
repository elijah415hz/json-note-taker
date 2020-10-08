const express = require("express");
const path  = require("path");

const router = express.Router();


// Root path
router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/index.html"))
})

// Serve notes.html
router.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/notes.html"))
})

let counter = 1;
module.exports = counter;

// module.exports = router;