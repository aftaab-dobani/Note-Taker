const express = require('express');
const fs = require("fs");

//DOCUMENTATION
const app = express(); 
const PORT = 8080; 
const path = require("path");

//!!HTML ROUTE 
// GET Notes Route ==> return notes.html
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './assets/notes.html'));
})
// GET * ==> return index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './assets/index.html'));
})


//!!API ROUTE
// GET /api/notes ==> read 'db.json and return all saved notes
module.exports = (app) => {

app.get('/api/notes', (req, res) => {
    fs.readFile("/db.json")
}

// 'POST /api/notes ==> receive a new note to save to on the request body and add it to the db.json file. *Look into NPM packages for unique ID for notes*
app.post('/api/notes', (req, res) => 
res.json(db));


