const router = require("express").Router();
const notes = require("../../db/db.json");

const fs = require('fs');
const path = require('path')

router.get('/notes', (req, res) => {
  res.send(notes);
});

router.post('/notes', (req, res) => {

  // console.log(notes)
  // console.log(req.body)

  notes.push(req.body)

  // console.log(notes);

  fs.writeFileSync(path.join(__dirname,"../../db/db.json"), JSON.stringify(notes))

  res.send(notes)

});

router.delete('/notes/:id', (req, res) => {
  const userIndex = getUserIndex(req.params.userId)

  if (userIndex === -1) return res.status(404).json({})
 
  users.splice(userIndex, 1)
  res.json(users)
});



module.exports = router;