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

const item1 = new items ({
    name : "Welcome to the todo list"
})
const item2 = new items ({
    name : "You can add or remove"
})
const item3 = new items ({
    name : "<-- hit this to Remove items"
})

const defaultItems = [item1, item2, item3]

///////////////////////////
// list for custom list entry

const customListSchema = mongoose.Schema({
    name : String,
    items : [itemSchema]
})

const customlist = mongoose.model("custom_list", customListSchema)


// You can't change the code to insert when you deploy on the web server 
// items.insertMany(todoArray).then(()=>{console.log("items added to the database")}).catch(err=>{console.log("error inserting the values : ", err)})
// inert

// items.deleteMany({}).then(()=>{console.log("todo items records removed")})

/////////////////////////////////////////////////



app.get("/", (req, res)=>{
    items.find({}).then(data=>{
       if(data.length === 0){
        items.insertMany(defaultItems)   
        res.redirect("/")
    }else{
        res.render("list", {ListTitle: "Today", newlyListed : data})

    }}).catch(err=>{console.log("error : ", err)})    
})    

app.post("/", (req,res)=>{

    const inputItem = req.body.whatTodo

    const newItem = new items({
        name : inputItem
    })    

    const buttonlist = req.body.button


    if(buttonlist === "Today"){
        newItem.save()
        res.redirect('/')
    }else{
        customlist.findOne({name: buttonlist}).then( foundlist =>{
                foundlist.items.push(newItem)
                foundlist.save() //this will update the data
                res.redirect("/"+ foundlist.name)
        }).catch(err=>{console.log(err)})



    }


})    


app.post("/delete", (req, res)=>{

    const todel = req.body.checkbox // this fetch the value of the checkbox marked
    const listname = req.body.listname 
    
    
    if(listname === 'Today'){
        items.deleteOne({_id : todel}).then(()=>{console.log('deleted done')})
        res.redirect("/")
    }else{
        customlist.find({name : listname}).then(data =>{
            data.items.forEach(items => {
                if(items._id === todel){
                    items._id.deleteOne()
                }
            });
        })
        
    
    
    }
    
    
    
    
    
    
    
    
})    

app.get("/about", (req,res)=>{
    res.render("about")
})    






//////////////////////////////////
// Dynamic Routes////////////////////////////////////////////
app.get("/:dynamicList", (req, res)=>{
    const custom_list_name = req.params.dynamicList

    const list = new customlist({
        name : custom_list_name,
        items : defaultItems
    })    

    
    customlist.findOne({ name: custom_list_name })
    .then(foundLists => { // returns an array

      if (!foundLists) {
        // Create a new list
        list.save()
        res.redirect("/"+ custom_list_name)
    } else {
        res.render("list", {ListTitle: foundLists.name, newlyListed : foundLists.items})
      }
    })
    .catch(err => {
      console.log('error found : ', err)
    });

})    






app.listen(3333 , function(){
    console.log("the server is running at port 3333")
})    















