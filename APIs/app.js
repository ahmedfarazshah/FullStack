const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const ejs = require("ejs")
const { title } = require("process")
const { stringify } = require("querystring")

const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"))
app.set('view engine', "ejs")


mongoose.connect("mongodb://localhost:27017/wikiDB")

const articleSchema = mongoose.Schema({
    title : String,
    content : {type : String}

})

const articles = mongoose.model('article', articleSchema)


app.get("/articles", (req, res)=>{

    articles.find().then(data=>{
        res.send(data)
    }).catch(err=>{
        res.send(err)
    })




})



















//port
const port = 3000

app.listen(port, () =>{
    console.log("Server started at port: " + port)
})

