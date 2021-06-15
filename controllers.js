const connection = require("./db");

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

module.exports={
    addBook,
    getAllBooks,
    updateBook,
}
