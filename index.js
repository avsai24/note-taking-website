require('dotenv').config(); //dotenv config

const express = require('express');
const app = express();

const UserRouter = require('./server/routes/user');
const NoteRouter = require('./server/routes/note');

//cors middleware
app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
    next();
});

app.use(express.json());  //json bodies

/*
app.get('*', function (req, res){
     res.sendFile(path.resolve(__dirname, 'public', 'login.html'));
 });
 app.get('*', function (req, res){
     res.sendFile(path.resolve(__dirname, 'public', 'note.html'));
 });
*/

app.use("/users", UserRouter);
app.use("/notes",NoteRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`server started on port ${PORT}!`));
