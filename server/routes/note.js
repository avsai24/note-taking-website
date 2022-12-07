const express  = require('express');
const Note = require('../models/note');
const Noterouter = express.Router();

Noterouter
    .get('/', async (req, res) =>{
    try{
        const notes = await Note.getAllnote();
        res.send(notes);
    } catch(err){
        res.status(401).send({message: err.message});
    }
})

    .post('/create', async (req, res) => {
        try{
            let note = await Note.createNote(req.body);
            res.send({note})
        } catch(err){
            res.status(401).send({message: err.message});
        }
    })

    .put('/edit', async (req, res) => {
        try {
          let note = await note.editNote(req.body);
          res.send({note});
        } catch(err) {
          res.status(401).send({message: err.message})
        }
      })
    
      .delete('/delete', async (req, res) => {
        try {
          Note.deleteNote(req.body);
          res.send({success: "We'll Miss You... :("})
        } catch(err) {
          res.status(401).send({message: err.message})
        }
      })

module.exports = Noterouter;