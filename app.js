const express = require("express");
require("dotenv").config();
const db = require('./db');
const {addBook, getAllBooks, updateBook, deleteBook, getBooksDescendOrder, getNoPriceBooks, getPricedBooks} = require("./controllers");

const app = express()
app.use(express.json())

app.post("/books",addBook );
app.get("/books", getAllBooks);
app.put("/books/:bookid", updateBook);
app.delete("/books/:bookid", deleteBook);
app.get("/books/noPrice", getNoPriceBooks);
app.get("/books/priced", getPricedBooks);

const PORT = 5000;
app.listen(PORT,()=>{
    console.log('Server is running on', PORT);
})