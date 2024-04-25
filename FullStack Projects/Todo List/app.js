const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const date = require(__dirname + "/date.js")

const app = express()

app.use(express.static("public"))
app.set("view engine" , "ejs")
app.use(bodyParser.urlencoded({extended: true}))

mongoose.connect("mongodb://localhost:27017/todolistDB")

const itemSchema = mongoose.Schema({
    name : {type : String, required : true}
})

const items = mongoose.model("todoItem", itemSchema)

const buyBooks = new items ({
    name : "Buy Some Books"
})
const readBooks = new items ({
    name : "Read the Books"
})
const code = new items ({
    name : "Code"
})

const todoArray = [buyBooks, readBooks, code]
// items.insertMany(todoArray).then(()=>{console.log("items added to the database")}).catch(err=>{console.log("error inserting the values : ", err)})



app.get("/", (req, res)=>{
    const day = date.getdate()    
    res.render("list", {ListTitle: day})
})

app.post("/", (req,res)=>{
    let newInput = req.body.whatTodo
    if(req.body.button === "Work"){
        workItems.push(newInput)
        res.redirect("/work")
    }else{
        items.push(newInput)
        res.redirect("/")
        // console.log(req.body.button) // This showed us the value of the button that was pressed on which page using the template
    }
})


app.get("/work", (req,res)=>{
    res.render("list", {ListTitle : "Work", newlyListed: items.name})

})

app.get("/about", (req,res)=>{
    res.render("about")
})





app.listen(3333 , function(){
    console.log("the server is running at port 3333")
})















