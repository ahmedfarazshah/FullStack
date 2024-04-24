const mongoose = require('mongoose') // this replaces the mongo and assert 

mongoose.connect("mongodb://localhost:27017/fruitsDB") // this will connect and make a fruitsdb is not present

// will make a schema so that we will use in model

const fruitSchema = new mongoose.Schema({
    name : {type : String, required : true, },
    season : String,
    rating : {type: Number , min : 1, max :[10, 'standard type of rating 1-10']}
})
const peopleSchema = new mongoose.Schema({
    id: {unique : true , required: true},
    name : String,
    age : {type :Number, min: 18, max:101}
})

// model : creates a collection and is using schema to store records

const summer = mongoose.model("summer_fruit", fruitSchema)
const winter = mongoose.model("winter", fruitSchema)
const people = mongoose.model("people", peopleSchema)

// now inserting records to the summer collection

const mango = new summer({
    name : "Mango",
    season : "Summer",
    rating: 9
})
const person2 = new people({
    name : "John Cena",
    age : 44
})
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

// to save or add records to the collection we use .save
// apple.save()
// mango.save()

// to insert many we use the model : Fruits.insertMany([apple, orange, banna], function(err, data){})
// winter.insertMany([orange, harmit, gindawar])
// person2.save().then(()=>{console.log("You can see me")})

async function winterFruits(criteria= {}, projection = {}){
    try{
        const winfruits = await winter.find(criteria, projection)
    winfruits.forEach((data)=>{
        console.log(data.name , "rating : ", data.rating)
    })
}catch (err) {
    console.log("error found ",err)
}
}

async function findPeople(){
    try{
        const allpeople = await people.find()
        allpeople.forEach(function(data){
            console.log(data.name)
        })
    }catch(err){
        console.log("error found: "), err;
    }
    
}
async function summerFruits(){
    try{
        const sumfruits = await summer.find()
        sumfruits.forEach(data=>{
            console.log(data.name)
        })
        mongoose.disconnect()
        console.log("connection closed")
    }catch (err){
        console.log("connection closed err", err)
    }
    
}   

// winterFruits()
// findPeople()
summerFruits()
