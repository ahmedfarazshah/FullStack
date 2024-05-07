// const ejs = require("ejs") // this is also no longer required but you have to install it in dependencies
// const bodyParser = require("body-parser") // no longer required as not it comes with the express newer versions 

const express = require("express")

const app = express()

app.use(express.static("public"))
app.use(express.urlencoded({extended : true}))
app.set('view engine', 'ejs')


//////////////////////////////////////////////////// Get Verbs(REST) /////////////////////////////////////////

app.get("/", (req, res)=>{
    res.render("home")
})

app.get("/login", (req, res)=>{
    res.render("login")
})

app.get("/register", (req, res)=>{
    res.render("register")
})

app.get("/secrets", (req, res)=>{
    res.render('secrets')
})

app.get("/submit", (req, res)=>{
    res.render("submit")
})

///////////////////////////////////////////////////// Post Verbs (REST) ///////////////////////////////////////








/////////////////////////////////////////////////////////// Server Setup ///////////////////////////////////////////////////////

app.listen(3000 , ()=>{
    console.log("Server started at port 3000")
})