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


module.exports = router;