const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs")


// GET 

router.get("/api/notes", (req, res) => {
    let data = fs.readFileSync("./db/db.json", "utf8");
    notes = JSON.parse(data);
    res.json(notes);
})

// POST

router.post("/api/notes", (req, res) => {
    let data = fs.readFileSync("./db/db.json", "utf8");
    notes = JSON.parse(data);
    let id = notes.length + 1;
    const { title, text } = req.body;
    notes.push({ title, text, id });
    fs.writeFileSync("./db/db.json", JSON.stringify(notes, null, 2));
    res.send({ msg: "success" });
})

// DELETE

router.delete("/api/notes/:id", async (req, res) => {
    let data = await fs.readFileSync("./db/db.json", "utf8");
    let notes = JSON.parse(data);
    const idToDelete = req.params.id;
    notes.forEach((value, index) => {
        if (value.id == idToDelete) {
            notes.splice(index, 1);
        }
    });
    await fs.writeFileSync("./db/db.json", JSON.stringify(notes, null, 2), (err) => { if (err) throw err });
});

module.exports = router;