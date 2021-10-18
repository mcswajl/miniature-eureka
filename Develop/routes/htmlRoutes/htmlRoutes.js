const path = require("path");
const router = require("express").Router();
// const { validateNotes, creatNewNote } = require("../../public/notes.html");
// const {notes} = require("../../public/notes.html")

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/index.html"));
});

router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/notes.html"));
});

module.exports = router;