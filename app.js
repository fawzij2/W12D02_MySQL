const express = require("express");
require("dotenv").config();
const db = require('./db');
const {addBook, getAllBooks} = require("./controllers");

const app = express()

app.post("/books",addBook );
app.get("/books", getAllBooks);

const PORT = 5000;
app.listen(PORT,()=>{
    console.log('Server is running on', PORT);
})