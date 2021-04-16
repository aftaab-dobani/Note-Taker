const express = require("express");
const fs = require("fs");
const path = require("path");
const uniqid = require("uniqid");
const db = require("./db/db.json");

//DOCUMENTATION
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
//add middleware for public folder



//!!API ROUTE
// GET /api/notes ==> read 'db.json and return all saved notes
app.get("/api/notes", (req, res) => {
  console.log("get notes route");
  fs.readFileSync("./db/db.json", db);
  res.json(db);
});

// 'POST /api/notes ==> receive a new note to save to on the request body and add it to the db.json file. *Look into NPM packages for unique ID for notes*
app.post("/api/notes", (req, res) => {
  let notes = req.body;
  notes.id = uniqid();
  console.log(notes);
  db.push(notes);
  fs.writeFile("./db/db.json", JSON.stringify(db), "utf-8", (res, err) => {
    if (err) throw err;
  });
  res.json(db);
});

// 1. req.body
// 2. fs.readFile
// 3. JSON.parse
// 4.

//!!HTML ROUTE
// GET Notes Route ==> return notes.html
app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/notes.html"));
});
// GET * ==> return index.html
 app.get("*", (req, res) => {
   res.sendFile(path.join(__dirname, "./public/index.html"));
 });

 
//PORT TO LISTEN
app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});
