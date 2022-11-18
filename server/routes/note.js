const express  = require('express');
const Note = require('../models/note');
const Noterouter = express.Router();

Noterouter.get('/', async (req, res) =>{
    try{
        const notes = await Note.getnote();
        res.send(notes);
    } catch(err){
        res.status(401).send({message: error.message});
    }
})

    .post('/note', async (req, res) => {
        try{
            let note = await Note.note(req.body);
            res.send({...note,})
        } catch(err){
            res.status(401).send({message: err.message});
        }
    })
module.exports = Noterouter;