const express = require('express');
const LoginRouter =  require('../models/loginmodel');
const router = express.Router();

router.get('/', (req, res) => {
    try{
        const login = LoginRouter.getLogin();
        res.send(login);
    } catch(err){
        res.status(401).send({message: error.message});
    }

});

module.exports = router;