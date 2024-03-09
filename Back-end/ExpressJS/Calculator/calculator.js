const express = require("express")
const app = express();


app.get("/", (req, res)=>{
    res.send("<button> first Number</button>")
    
})










app.listen(3000, ()=>{
    console.log("the server is tuned to 3000 port")
    console.log(__dirname)
})