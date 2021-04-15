const express = require('express');
const fs = require("fs");

//DOCUMENTATION
const app = express(); 
const PORT = 8080; 

//!!HTML ROUTE 
// GET Notes Route ==> return notes.html
app.get('/notes', (req, res) => {
    res.sendFile(path)
})
// GET * ==> return index.html
app.get('/index', (req, res) => {
    res.sendFile(path)
})


//!!API ROUTE
// GET /api/notes ==> read 'db.json and return all saved notes
app.get('/api/notes', (req, res) => res.json(db)); 
// 'POST /api/notes ==> receive a new note to save to on the request body and add it to the db.json file. *Look into NPM packages for unique ID for notes*
