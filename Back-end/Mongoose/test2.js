const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/Mobiles")

const mobileSchema = mongoose.Schema({
    id : {type : Number , unique: true},
    model : String,
    os : String,
    made_in : String,
    year : {type : Number, required: true}
})

const android = mongoose.model("andriod", mobileSchema)
const apple = mongoose.model("apple", mobileSchema)

const tecno = new android({
    model : "Techno Spark 7pro",
    os : "andriod",
    made_in: 'Pakistan',
    year : 2020
})
const samsungs23 = new android({
    model : "Samsung s23",
    os : "andriod",
    made_in: "USA",
    year : 2023
})

const iphone14 = new apple ({
    model : "IPhone14Plus",
    os : "apple/ Mac",
    made_in : "Korea",
    year : 2023
})

// android.insertMany([tecno, samsungs23]) 
// iphone14.save()


// to query the records in the models/collections

// const andriodPhones =  android.find()
// console.log(andriodPhones)
// const applePhones = apple.find()
// console.log(applePhones) // thats why functions are required so that the values will be deliverd asyncronuously
///////////////////////////////////////////////
async function andriodavilable (criteria = {}, projection = {}){
    try{
        const phones = await android.find(criteria, projection)
    // console.log(phones)
    phones.forEach(element => {
        return console.log(element.os)
    })
    mongoose.disconnect()
    console.log("connection disconnected by admin")
    }catch(err){
        console.log("error collecting or fetching data", err)
    }
}
andriodavilable({}, {})

