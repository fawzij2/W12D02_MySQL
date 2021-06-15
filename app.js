const express = require("express");
require("dotenv").config();
const db = require('./db');


const app = express()

const PORT = 5000;
app.listen(PORT,()=>{
    console.log('Server is running on', PORT);
})