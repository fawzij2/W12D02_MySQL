const connection = require("./db");


// pulse check 3
const addBook = (req,res)=>{
    const {title,author,published_at,price}=req.body;
    const query = "INSERT INTO book (title, author, published_at, price) VALUE (?,?,?,?);";
    const data = [title,author,published_at,price];
    connection.query(query,data,(err,result)=>{
        if(err){
            throw err;
            return;
        }
        console.log(result)
        res.json(result);
    })
};

// pulse check 4
const getAllBooks = (req,res)=>{
    const query = "SELECT * FROM book"
    connection.query(query,(err,result)=>{
        if (err){
            console.log(err);
            throw err;
        }
        console.log(result);
        res.json(result);
    })
};


// practice 1
const updateBook = (req,res)=>{
    const bookId = req.params.bookid;
    console.log(bookId);
    const {title, author, published_at, price} = req.body;
    console.log(req.body)
    const query =  `UPDATE book SET title = ?, author=?, published_at=?, price=? Where id=${bookId};`;
    const bookData = [title, author, published_at, price];
    connection.query(query,bookData, (err,result)=>{
        if(err) {
            console.log(err);
            throw err;
        }
        console.log(result);
        res.json(result);
    })
}

// practice 2
const deleteBook = (req,res)=>{
    const bookId = req.params.bookid;
    const query = `DELETE FROM book WHERE id=${bookId}`;
    connection.query(query,(err,result)=>{
        if (err) {
            console.log(err);
            throw err;
        }
        console.log(result);
        res.json(result);
    })
}

// practice 3
const getBooksDescendOrder = (req,res)=>{
    const query = "Select * FROM book ORDER BY id DESC";
    connection.query(query,(err,result)=>{
        if (err) {
            console.log(err);
            throw err;
        };
        console.log(result);
        res.json(result);
    })
}

// practice 4
const getNoPriceBooks = (req,res)=>{
    const query = "SELECT * FROM book WHERE price IS NULL";
    connection.query(query,(err,result)=>{
        if (err) {
            console.log(err);
            throw err;
        };
        console.log(result);
        res.json(result);
    })
}

module.exports={
    addBook,
    getAllBooks,
    updateBook,
    deleteBook,
    getBooksDescendOrder,
    getNoPriceBooks,
}
