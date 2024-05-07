const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const ejs = require("ejs")
const { STATUS_CODES } = require("http")
const { title } = require("process")

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
// for a specific record /////////////////////////////////////////////////

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




.put((req,res)=>{
    const requestedTitle= req.params.articleTitle
    ////////////// {new: true}if not added in the find one and updade or any update    it returns the original document before the update.
    articles.updateOne({title : requestedTitle}, {title : req.body.title, content: req.body.content}, {new : true}).then(data=>{
        res.send(data)
    }).catch(err =>{
        console.log(err)
        res.send(err)
    })

        // patch is guess no longer required as {overwrite is depricated in the new version of mongoose}
})



.patch((req, res)=>{
    // patch is nolonger required as of my perspective because the $set is already / defaulty used in the put method 

    // req.body = {
    //     title : "something",
    //     content : "something too"
    // } //////////////////////////////////////////// this object was just to demonstrate you that set a object requested by the client


    articles.updateOne({title : req.params.articleTitle}, {$set : req.body}, {new: true}).then(data=>{
        res.send(data)
    }).catch(err=>{
        res.send(err)
    })


})




.delete((req, res)=>{
    articles.deleteOne({title : req.params.articleTitle}).then(res.send("deleted")).catch(err =>{res.send(err)})
});

















//port
const port = 3000

app.listen(port, () =>{
    console.log("Server started at port: " + port)
})

