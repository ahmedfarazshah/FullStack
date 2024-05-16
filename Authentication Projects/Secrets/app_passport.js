/////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////// This project is made using only passport local startigy not any oauth or third party 

require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const session = require("express-session")
const passport = require("passport")
const passportLocalMongoose = require("passport-local-mongoose")

const app = express()

app.use(express.static("public"))
app.use(express.urlencoded({extended : true}))
app.set('view engine', 'ejs')

app.use(session({
    secret: "Our little secret.",
    resave: false,
    saveUninitialized: false
}))

app.use(passport.initialize())
app.use(passport.session())

//////////////////////////////////////////////// Database setup ///////////////////////////
mongoose.connect("mongodb://localhost:27017/userDB")

const userSchemaa = new mongoose.Schema({
    email : String,
    password : String,
    secret: String
})

//plugins in schema for the collections security 
userSchemaa.plugin(passportLocalMongoose)

const Users = mongoose.model("user", userSchemaa)

passport.use(Users.createStrategy())
passport.serializeUser(Users.serializeUser())
passport.deserializeUser(Users.deserializeUser())

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
    Users.find({secret: {$ne:null}}).then(user=>{
        res.render("secrets", {usersWithSecret : user})
    }).catch(err=>{
        console.log(err)
    })
})

app.get("/logout", (req, res)=>{
    req.logout(err=>{
        console.log(err)
    })
    res.redirect("/")
})

app.get("/submit", (req, res)=>{
    res.render("submit")
})

///////////////////////////////////////////////////// Post Verbs (REST) ///////////////////////////////////////

app.post("/register", (req, res)=>{
    const username = req.body.username
    const pass = req.body.password

    Users.register({username: username}, pass, (err, user)=>{
        if(err){
            console.log(err)
            res.redirect("/register")
        }else{
            passport.authenticate("local")(req, res, function(){
                res.redirect("/secrets")
            })
        }
    })


})

app.post("/login",(req, res)=>{ 

    const newUser = new Users({
        username : req.body.username, //not email because you are registering users users.register (username not email)
        password : req.body.password
    })

    req.logIn(newUser, function(err){
        if(err){console.log(err)

        }else{
            passport.authenticate("local")(req, res, function(){
                res.redirect("/secrets")
            })
        }
    })
})

app.post("/submit", (req, res)=>{
    secretPosted = req.body.secret
    console.log(req.user.id) // this is due to passport is stores the current user and is helpful
    Users.find({id: req.body.id}).then(user=>{
        user.secret = secretPosted
        user.save()
        res.redirect("/secrets")
    }).catch(err=>{
        console.log(err)
    })
  
})

/////////////////////////////////////////////////////////// Server Setup ///////////////////////////////////////////////////////

app.listen(3000 , ()=>{
    console.log("Server started at port 3000")
})