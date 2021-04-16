const express = require('express');
const fs = require("fs");
const path = require("path");

//DOCUMENTATION
const app = express(); 
const PORT = 3000; 

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '/public')));
//add middleware for public folder

//!!HTML ROUTE 
// GET Notes Route ==> return notes.html
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
})
// GET * ==> return index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
})


//!!API ROUTE
// GET /api/notes ==> read 'db.json and return all saved notes
app.get('/api/notes', (req, res) => res.json(notes));



// 'POST /api/notes ==> receive a new note to save to on the request body and add it to the db.json file. *Look into NPM packages for unique ID for notes*
app.post('/api/notes')

//PORT TO LISTEN 
app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
  }); 