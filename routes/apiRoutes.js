// require packages
const express = require("express");
const router = express.Router();
const fs = require("fs")

// notes route
router.get("/notes", function(req, res) {
    fs.readFile("./db/db.json", "utf8", (err, data) => {
        if (err) throw err;
        let jsonData = JSON.parse(data)
        return res.json(jsonData.notes);
    })
})

router.post("/notes", function(req, res) {
    let note = req.body
    fs.readFile("./db/db.json", "utf8", (err, data) => {
        if (err) throw err;
        let jsonData = JSON.parse(data)
        let notes = jsonData.notes;
        jsonData.lastID++;
        let id = jsonData.lastID;
        note.id = id;
        notes.push(note);
        fs.writeFileSync("./db/db.json", JSON.stringify(jsonData, null, 2), "utf8")
        return res.json(notes)
    })
})

router.delete("/notes/:id", function (req, res) {
    id = req.params.id
    fs.readFile("./db/db.json", "utf8", (err, data) => {
        if (err) throw err;
        let jsonData = JSON.parse(data)
        for (let i=0; i<jsonData.notes.length; i++) {
            if (jsonData.notes[i].id == id) {
                jsonData.notes.splice(i, 1);
                fs.writeFile("./db/db.json", JSON.stringify(jsonData, null, 2), "utf8", err=>{
                    if(err) throw err;
                })
                return res.send("Deleted!")
            }
        }
        return res.send("Delete Failed")
    })
})

module.exports = router;