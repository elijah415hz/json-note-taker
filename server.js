const express = require("express");
const fs = require("fs")

const app = express();
const PORT = 3000;

app.get("/", function(req, res) {
    fs.readFile(__dirname + "/public/index.html", "utf8", (err, data) => {
        if (err) throw err;
        return res.send(data);
    })
})

app.get("/notes", function(req, res) {
    fs.readFile(__dirname + "/public/notes.html", "utf8", (err, data) => {
        if (err) throw err;
        return res.send(data);    
    })
})

app.listen(PORT, function() {
    console.log("Server listening on Port " + PORT)
})