const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const date = require(__dirname + "/date.js")

const app = express()

app.use(express.static("public"))
app.set("view engine" , "ejs")
app.use(bodyParser.urlencoded({extended: true}))

mongoose.connect("mongodb://localhost:27017/todolistDB")

const itemSchema = mongoose.Schema({
    name : {type : String, required : true}
})

const items = mongoose.model("todoItem", itemSchema)

const buyBooks = new items ({
    name : "Buy Some Books"
})
const readBooks = new items ({
    name : "Read the Books"
})
const code = new items ({
    name : "Code"
})

const defaultItems = [buyBooks, readBooks, code]

// console.log("itemscollecions :",itemsincollection)

// You can't change the code to insert when you deploy on the web server 
// items.insertMany(todoArray).then(()=>{console.log("items added to the database")}).catch(err=>{console.log("error inserting the values : ", err)})
// inert

// items.deleteMany({}).then(()=>{console.log("todo items records removed")})

app.get("/", (req, res)=>{

    const day = date.getdate()    

    items.find({}).then(data=>{
       if(data.length === 0){
        items.insertMany(defaultItems)

        res.redirect("/")
    }else{
        res.render("list", {ListTitle: day, newlyListed : data})

    }}).catch(err=>{console.log("error : ", err)})
})

app.post("/", (req,res)=>{

    const inputItem = req.body.whatTodo

    const newItem = new items({
        name : inputItem
    })
    newItem.save()
    res.redirect('/')


    ////////////////////////////
    // no need if you use mongoose
    // let newInput = req.body.whatTodo
    // if(req.body.button === "Work"){
    //     workItems.push(newInput)
    //     res.redirect("/work")
    // }else{
    //     items.push(newInput)
    //     res.redirect("/")
    //     // console.log(req.body.button) // This showed us the value of the button that was pressed on which page using the template
    // }
})


app.post("/delete", (req, res)=>{

    const todel = req.body.checkbox // this fetch the value of the checkbox marked
    items.deleteOne({_id : todel}).then(()=>{console.log('deleted done')})
    
    
    res.redirect("/")



})






app.get("/work", (req,res)=>{
    res.render("list", {ListTitle : "Work", newlyListed: items})

})

app.get("/about", (req,res)=>{
    res.render("about")
})





app.listen(3333 , function(){
    console.log("the server is running at port 3333")
})















