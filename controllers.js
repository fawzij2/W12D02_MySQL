const connection = require("./db");

const addBook = (req,res)=>{
    // const {title,author,published_at,price}=req.body;
    const query = "INSERT INTO book (title, author, published_at, price) VALUE (?,?,?,?);";
    const data = ["how to code 3",'khamis','2021-07-15',35];
    connection.query(query,data,(err,result)=>{
        if(err){
            throw err;
            return;
        }
        console.log(result)
        res.json(result);
    })
}

module.exports={addBook}
