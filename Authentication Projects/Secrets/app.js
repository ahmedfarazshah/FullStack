// const ejs = require("ejs") // this is also no longer required but you have to install it in dependencies
// const bodyParser = require("body-parser") // no longer required as not it comes with the express newer versions 

const express = require("express")
const mongoose = require("mongoose")

const app = express()

app.use(express.static("public"))
app.use(express.urlencoded({extended : true}))
app.set('view engine', 'ejs')

//////////////////////////////////////////////// Database setup ///////////////////////////
mongoose.connect("mongodb://localhost:27017/userDB")

const userSchema = mongoose.Schema({
    email : String,
    password : String
})

const Users = mongoose.model("user", userSchema)


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

///////////////////////////////////////////////////// Post Verbs (REST) ///////////////////////////////////////

app.post("/register", (req, res)=>{
    const username = req.body.username
    const pass = req.body.password

    const newUser = new Users({
        email : username, 
        password : pass
    })
    newUser.save().then(()=>{res.render("secrets")}).catch(err=>{res.send(err)})
})

app.post("/login",(req, res)=>{ 
    const username = req.body.username
    const pass = req.body.password

    Users.findOne({email : username}).then(data =>{
        if(data.password === pass){
            res.render("secrets")
        }
    }).catch(err=>{res.send(err)})
})






/////////////////////////////////////////////////////////// Server Setup ///////////////////////////////////////////////////////

app.listen(3000 , ()=>{
    console.log("Server started at port 3000")
})