// const ejs = require("ejs") // this is also no longer required but you have to install it in dependencies
// const bodyParser = require("body-parser") // no longer required as not it comes with the express newer versions 
// const encrypt = require("mongoose-encryption") // instead of it hashing is used
// const md5 = require("md5")

require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const saltRounds = 10

const app = express()

app.use(express.static("public"))
app.use(express.urlencoded({extended : true}))
app.set('view engine', 'ejs')

//////////////////////////////////////////////// Database setup ///////////////////////////
mongoose.connect("mongodb://localhost:27017/userDB")

const userSchema = new mongoose.Schema({
    email : String,
    password : String
})

// userSchema.plugin(encrypt, {secret : process.env.SECRETS, encryptedFields:["password"] }) /// a plugin adds features to a programme
//thus added a security level in database hidding the password // this will no longer be required as we will use hashing function(md5)

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
    const pass = (req.body.password)
    // const pass = md5(req.body.password) // now using bcrypt for security purposes

    bcrypt.hash(pass, saltRounds).then(hash =>{
        const newUser = new Users({
            email : username, 
            password : hash
        })
        newUser.save().then(()=>{res.render("secrets")}).catch(err=>{res.send(err)})
     })
    })
    
    

app.post("/login",(req, res)=>{ 
    const username = req.body.username
    const pass = req.body.password

    Users.findOne({email : username}).then(data =>{
        bcrypt.compare(pass, data.password).then(hash=>{
            if(hash === true){
                res.render("secrets")
            }
        }).catch(err=>{res.send(err)});
    })
    .catch((err)=>{res.send(err)})
})

/////////////////////////////////////////////////////////// Server Setup ///////////////////////////////////////////////////////

app.listen(3000 , ()=>{
    console.log("Server started at port 3000")
})