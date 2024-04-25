const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/fruitsDB")

const fruitSchema = mongoose.Schema({
    name : {type : String, required : true},
    season : String,
    rating : {type : Number, min : 1 , max : [10, "rating should be 1-10"]}
})
const peopleSchema = mongoose.Schema ({
    name : {type : String, required : true},
    age : Number, 
    favfruit : fruitSchema,
    location : String
})

const fruit = mongoose.model("fruit", fruitSchema)
const people = mongoose.model("people", peopleSchema)


const peach = new fruit({
    name : "Peach",
    season : 'summer',
    rating : 8
})

const watermelon = new fruit({
    name : "WaterMelon",
    season : "summer",
    rating: 7
})
const apple = new fruit({
    name : "Apple",
    season : 'summer',
    rating : 8
})
const person = new people({
    name : "Hanzel",
    age : 33,
    favfruit : watermelon
})

people.updateOne({age:44}, {favfruit : apple}).then(()=>{console.log("name update")}).catch(err=>{console.log("error found ", err)})


// person.save()
// peach.save()

