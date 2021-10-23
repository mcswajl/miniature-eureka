const router = require("express").Router();
let notes = require("../../db/db.json");
var uniqid = require('uniqid'); 

const fs = require('fs');
const path = require('path')

router.get('/notes', (req, res) => {
  fs.readFile(path.resolve(__dirname,"../../db/db.json"), "utf-8", (err, data)=> {
    if (err) console.log(err.message)
    console.log(data)
    res.status(200).json(JSON.parse(data))
  });
});

router.post('/notes', (req, res) => {

  // console.log(notes)
  // console.log(req.body)

  var newnote = req.body 
  newnote.id = uniqid()
  notes.push(newnote)
  

  // console.log(notes);

  fs.writeFileSync(path.join(__dirname,"../../db/db.json"), JSON.stringify(notes))
  notes = require("../../db/db.json");
  res.send(notes)

});

router.delete("/notes/:id", (req, res) => {
  // const userIndex = getUserIndex(req.params.userId)
  console.log(req.params.id)

  // if (userIndex === -1) return res.status(404).json({})
 let newdata = notes.filter(note => note.id !== req.params.id)
 console.log(newdata)
  // users.splice(userIndex, 1)
  // res.json(users)
  fs.writeFileSync(path.join(__dirname,"../../db/db.json"), JSON.stringify(newdata))
  res.status(200).json(newdata)
});



module.exports = router;