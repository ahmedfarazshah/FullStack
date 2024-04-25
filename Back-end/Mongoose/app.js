const mongoose = require('mongoose') // this replaces the mongo and assert 

mongoose.connect("mongodb://localhost:27017/fruitsDB") // this will connect and make a fruitsdb is not present

// will make a schema so that we will use in model

const fruitSchema = new mongoose.Schema({
    name : {type : String, required : true, unique: true},
    season : String,
    rating : {type: Number , min : 1, max :[10, 'standard type of rating 1-10']}
})
const peopleSchema = new mongoose.Schema({
    id: {type : Number , required: true},
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
const person = new people({
    id: 3,
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

// person.save().then(function(){console.log("person added")})
// to save or add records to the collection we use .save
// apple.save()

// mango.save()

// to insert many we use the model : Fruits.insertMany([apple, orange, banna], function(err, data){})
// winter.insertMany([orange, harmit, gindawar])
// person.save()




//////////////////////////////////
// Update - U

// summer.updateOne({_id: "6628d965fe449ff0eafa715f"}, {name: "Peach", rating: 6})
// summer.updateOne({_id: "6628d965fe449ff0eafa715f"}, {name: "Peach", rating:6})
//     .then(() => {
//             console.log("Document updated successfully!");
//     })
//     .catch(error => {
//         console.error("Error updating document:", error);
//     });

// Update many
// summer.updateMany({season:"Summer"}, {rating: 8})
// .then(function(){
//     console.log("values upadated")
// }).catch(err =>{
//     console.log("error :" , err)
// })



/////////////////////////////////////////
/// Delete - D


// person.deleteOne({_id : "66275dd948e9baaa7a9c9978"})
// .then(()=>{
//     console.log("Angela deleted Successfully")
// }).catch(err=>{
//     console.log("error :" , err)
// })


// people.deleteOne({age : 29}).then(()=>{
//     console.log("deleted id 3 successful")
// }).catch(err=>{
//     console.log("error found :" , err)
// })








////////////////////////////////////
///// Read - R
/*

async function winterFruits(criteria= {}, projection = {}){
    try{
        const winfruits = await winter.find(criteria, projection)
    winfruits.forEach((data)=>{
        console.log(data.name , "rating : ", data.rating)
    })
    // mongoose.disconnect()

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
        mongoose.disconnect()

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
        // mongoose.disconnect()
        console.log("connection closed")
    }catch (err){
        console.log("connection closed err", err)
    }
    
}   
*/
// winterFruits()
// findPeople()
// summerFruits()


// check test-embeding to see the how relationship is builded in mongoose 