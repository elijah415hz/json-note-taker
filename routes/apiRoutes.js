// require packages
const express = require("express");
const router = express.Router();
const fs = require("fs")

//TODO: Fix this counter
// Instantiate counter for auto-incrementing ids
var idCounter = 1;

// notes route
router.get("/notes", function(req, res) {
    fs.readFile("./db/db.json", "utf8", (err, data) => {
        if (err) throw err;
        let jsonData = JSON.parse(data)
        return res.json(jsonData);
    })
})

router.post("/notes", function(req, res) {
    let note = req.body
    fs.readFile("./db/db.json", "utf8", (err, data) => {
        if (err) throw err;
        let jsonData = JSON.parse(data)
        note.id = idCounter;
        jsonData.push(req.body);
        fs.writeFile("./db/db.json", JSON.stringify(jsonData), "utf8", (err) => {
            if (err) throw err;
        })
        idCounter++;
        return res.json(jsonData)

    })
    
})

router.delete("/notes/:id", function (req, res) {
    id = req.params.id
    fs.readFile("./db/db.json", "utf8", (err, data) => {
        if (err) throw err;
        let jsonData = JSON.parse(data)
        for (let i=0; i<jsonData.length; i++) {
            if (jsonData[i].id == id) {
                jsonData.splice(i, 1);
                console.log(jsonData)
                fs.writeFile("./db/db.json", JSON.stringify(jsonData), "utf8", err=>{
                    if(err) throw err;
                    return res.send("Deleted!")
                })
            }
        }
        return res.send("Delete Failed")
    })
})

module.exports = router;