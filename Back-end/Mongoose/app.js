const mongoose = require('mongoose') // this replaces the mongo and assert 

mongoose.connect("mongodb://localhost:27017/fruitsDB") // this will connect and make a fruitsdb is not present

// will make a schema so that we will use in model

const fruitSchema = new mongoose.Schema({
    name : String,
    season : String,
    rating : Number
})

// model : creates a collection and is using schema to store records

const summer = mongoose.model("summer_fruit", fruitSchema)

// now inserting records to the summer collection

const mango = new summer({
    name : "Mango",
    season : "Summer",
    rating: 9
})
// to save or add records to the collection we use .save
// apple.save()

// now making another collection for people
const peopleSchema = new mongoose.Schema({
    name : String,
    age : Number
})


const people = mongoose.model("people", peopleSchema)

const person2 = new people({
    name : "John Cena",
    age : 44
})
// person2.save().then(()=>{console.log("You can see me")})


// to insert many we use the model : Fruits.insertMany([apple, orange, banna], function(err, data){})
const winter = mongoose.model("winter", fruitSchema)

const orange = new winter({
    name: "orange",
    season: "winter",
    rating: 9  
})
const harmit = new winter({
    name: "harmit",
    season : "winter",
    rating : 6
})
const gindawar = new winter({
    name : "gindawar",
    season : 'winter',
    rating : 5
})

// winter.insertMany([orange, harmit, gindawar])