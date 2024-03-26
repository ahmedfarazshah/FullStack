const express = require("express")
const bodyParser = require("body-parser")

const app = express()

app.use(express.static("public"))
app.set("view engine" , "ejs")
app.use(bodyParser.urlencoded({extended: true}))

var items = ["Buy Books", "Read Books", "Code"]
var workItems = []


app.get("/", (req, res)=>{
    const today = new Date() // created the date object so that we will be able to fetch the current day and date

    var options = {
        weekday : "long",
        day : "numeric",
        month : "long",
        year : "numeric",
    }    
    var day = today.toLocaleDateString("ur-Ur", options) // uses the string format as setted in the options
    
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















