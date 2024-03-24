var express = require("express")
var bodyParser = require("body-parser")

const app = express()

app.use(express.static("public"))
app.set("view engine" , "ejs")
app.use(bodyParser.urlencoded({extended: true}))

var items = ["Buy Books", "Read Books", "Code"]
app.get("/", (req, res)=>{
    const today = new Date() // created the date object so that we will be able to fetch the current day and date

    var options = {
        weekday : "long",
        day : "numeric",
        month : "long",
        year : "numeric",
    }    
    var day = today.toLocaleDateString("ur-Ur", options) // uses the string format as setted in the options

        // res.send("Hurray It is : " + day + " and is a weekend") // uncommenting so that we are using ejs file
        res.render("list", {WhichDay: day, newlyListed: items})
    
})

app.post("/", (req,res)=>{
    var newInput = req.body.whatTodo
    items.push(newInput)
    res.redirect("/")
})








app.listen(3333 , function(){
    console.log("the server is running at port 3333")
})















