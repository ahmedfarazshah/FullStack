//using passport module npm

require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const passport = require("passport")
const passportLocalMongoose = require("passport-local-mongoose")
const session = require("express-session")


const app = express()

app.use(express.static("public"))
app.use(express.urlencoded({extended : true}))
app.set('view engine', 'ejs')

app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'our little secret. ',
  resave: false,
  saveUninitialized:false,
  cookie: { secure: true }
}))

app.use(passport.initialize())
app.use(passport.session())

//////////////////////////////////////////////// Database setup ///////////////////////////
mongoose.connect("mongodb://localhost:27017/userDB")



const userSchema = new mongoose.Schema({
    email : String,
    password : String
})
userSchema.plugin(passportLocalMongoose)

const Users = mongoose.model("user", userSchema)

passport.use(Users.createStrategy());

passport.serializeUser(Users.serializeUser()); // these both are only necessary when using sesions as it creates cookie with userid 
passport.deserializeUser(Users.deserializeUser());


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




})

app.post("/login",(req, res)=>{ 







})

/////////////////////////////////////////////////////////// Server Setup ///////////////////////////////////////////////////////

app.listen(3000 , ()=>{
    console.log("Server started at port 3000")
})
