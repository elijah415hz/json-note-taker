// Require packages
const express = require("express");
const fs = require("fs")

const app = express();
const PORT = process.env.PORT || 3000;

// Set up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set static folder to "public"
app.use(express.static("public")) 

// Root path
app.get("/", function(req, res) {
    fs.readFile(__dirname + "/public/index.html", "utf8", (err, data) => {
        if (err) throw err;
        return res.send(data);
    })
})

// Serve notes.html
app.get("/notes", function(req, res) {
    fs.readFile(__dirname + "/public/notes.html", "utf8", (err, data) => {
        if (err) throw err;
        return res.send(data);    
    })
})

// Set listening port
app.listen(PORT, function() {
    console.log("Server listening on Port " + PORT)
})