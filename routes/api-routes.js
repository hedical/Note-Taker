const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/api/notes", (req, res) => {
    res.json({ mess: "Hello from the api" })
})

module.exports = router;