//using passport module npm

require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const passport = require("passport")
const passportLocalMongoose = require("passport-local-mongoose")
const session = require("express-session")
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const findOrCreate = require('mongoose-findorcreate')



const app = express()

app.use(express.static("public"))
app.use(express.urlencoded({extended : true}))
app.set('view engine', 'ejs')

app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'our little secret. ',
  resave: false,
  saveUninitialized:false,
  cookie: { secure: true } ///////////// this is for https secure
}))

app.use(passport.initialize())
app.use(passport.session())

//////////////////////////////////////////////// Database setup ///////////////////////////
mongoose.connect("mongodb://localhost:27017/userDB")



const userSchema = new mongoose.Schema({
    email : String,
    password : String,
    googleId: String // this will not create one if its is already there
})
userSchema.plugin(passportLocalMongoose)
userSchema.plugin(findOrCreate)

const Users = mongoose.model("user", userSchema)

passport.use(Users.createStrategy());

// passport.serializeUser(Users.serializeUser()); // these both are only necessary when using sesions as it creates cookie with userid 
// passport.deserializeUser(Users.deserializeUser());
passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  
  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });


passport.serializeUser(function(user, cb) {
    process.nextTick(function() {
      return cb(null, {
        id: user.id,
        username: user.username,
        picture: user.picture
      });
    });
  });
  
  passport.deserializeUser(function(user, cb) {
    process.nextTick(function() {
      return cb(null, user);
    });
  });


 // USING GOOGLE OAUTH
passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "https://localhost:3000/auth/google/secrets",
    userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
        return cb(err, user);
    });
  }
));


//////////////////////////////////////////////////// Get Verbs(REST) /////////////////////////////////////////

app.get("/", (req, res)=>{
    res.render("home")
})

app.get('/auth/google',
    passport.authenticate('google', { scope: ['profile'] }));

app.get('/auth/google/secrets', 
    passport.authenticate('google', { failureRedirect: '/login' }),
    function(req, res) {
      // Successful authentication, redirect home.
      res.redirect('/secrets');
    });


app.get("/login", (req, res)=>{
    res.render("login")
})

app.get("/register", (req, res)=>{
    res.render("register")
})

app.get("/secrets", (req, res)=>{
    if(req.isAuthenticated()){
        res.render("secrets")
    }else{
        res.redirect("/login")
    }
})

app.get("/logout", (req, res)=>{
    req.logOut(err =>{
        if(err){console.log(err)}
        res.redirect("/")
    })
})


///////////////////////////////////////////////////// Post Verbs (REST) ///////////////////////////////////////

app.post("/register", (req, res)=>{
    
    Users.register({username : req.body.username}, req.body.password, (err, user)=>{
        if(err){
            console.log(err)
            res.redirect("/register")
        }else{
            passport.authenticate("local")(req, res, function(){ //local and req, res:  is a stratigy(plugin)  and cookie is made
                res.redirect("/secrets")
            })
        }
    })
})


app.post("/login",(req, res)=>{ 


    const user = new Users({
        username: req.body.username,
        password: req.body.password 
    })


    req.login(user, err=>{
        if(err){console.log(err)}
        else{
            passport.authenticate('local')(req, res, ()=>{
                res.redirect("/secrets")
            })
        }
    })


})

/////////////////////////////////////////////////////////// Server Setup ///////////////////////////////////////////////////////

app.listen(3000 , ()=>{
    console.log("Server started at port 3000")
})
