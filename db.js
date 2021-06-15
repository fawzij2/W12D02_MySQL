const mysql = require("mysql2");

const connection = mysql.createConnection({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
});

connection.connect((err)=>{
    if (err) {
        console.log("error connecting: " + err.stack);
        return
    };

    console.log("connected as id: " + connection.threadId)
})

module.exports = connection;