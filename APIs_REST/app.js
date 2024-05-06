const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const ejs = require("ejs")
const { title } = require("process")
const { stringify } = require("querystring")
const { STATUS_CODES } = require("http")

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


// route method in the express is used for chaining the verbs for the same route 

app.route("/articles")

.get((req,res)=>{

    articles.find().then(data=>{
        res.send(data)
    }).catch(err=>{
        res.send(err)
    })

})

.post((req, res)=>{

    const article_postman = new articles({
        title : req.body.title,
        content : req.body.content
    })

    article_postman.save().then(data=>{
    res.send(data)
    }).catch(err =>{
        res.send(err)
    })

    
})

.delete((req, res)=>{

    //caution will delete all the articles in the collection
    
    articles.deleteMany().then(()=>{res.send("deleted")}).catch(err =>{res.send(err)})

});

/////////////////////////////////////
// for a specific record

app.route("/articles/:articleTitle")

.get((req, res)=>{
    const req_title = req.params.articleTitle
    articles.findOne({title : req_title}).then(data=>{
        
        if(!data){
            res.send("nothing found")
        }else{
            res.send(data)
        }}).catch((err)=>{
            res.send(err)})
})
.delete()




app.put((req,res)=>{
////////////// {new: true}if not added in the find one and updade or any update    it returns the original document before the update.

    articles.updateOne({title : req.params.articleTitle}, {title : "req.body.title", content: req.body.content}, {new : true}).then(data=>{res.send(data)})

    
});

















//port
const port = 3000

app.listen(port, () =>{
    console.log("Server started at port: " + port)
})

