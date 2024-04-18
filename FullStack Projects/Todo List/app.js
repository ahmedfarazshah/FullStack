const express = require("express")
const bodyParser = require("body-parser")
const date = require(__dirname + "/date.js")

const app = express()

app.use(express.static("public"))
app.set("view engine" , "ejs")
app.use(bodyParser.urlencoded({extended: true}))

const items = ["Buy Books", "Read Books", "Code"]
const workItems = []


app.get("/", (req, res)=>{
    
    const day = date.getdate()    
    res.render("list", {ListTitle: day, newlyListed: items})
    
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
    res.render("list", {ListTitle : "Work", newlyListed: workItems})

})

app.get("/about", (req,res)=>{
    res.render("about")
})





app.listen(3333 , function(){
    console.log("the server is running at port 3333")
})















