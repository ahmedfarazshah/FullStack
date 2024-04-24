const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/Real_State")

const houseSchema = new mongoose.Schema({
    Location : String,
    land_in_acre : Number,
    number_of_rooms : Number
})
const landSchema = new mongoose.Schema({
    location : String,
    land_in_acre : Number
})


// making collection

const homes = mongoose.model("home", houseSchema)
const land = mongoose.model("land", landSchema)

// multiple of homes 

const house1 = new homes ({
    location : '1234london',
    land_in_acre : 33,
    number_of_rooms : 5
})
const house2 = new homes ({
  location : "texas 132",
  land_in_acre : 33,
  number_of_rooms : 2
})

// homes.insertMany([house1, house2])

const land_danyore = new land ({
    location: "amphari danyore",
    land_in_acre : 30
})
// land_danyore.save().then(function(){console.log("danyore land listed")})


// console.log(homes.find({}).toArray())
// land.find({})
// Find all lands
async function findLands() {
    try {
      const lands = await land.find();
      console.log("Found lands:", lands);
    } catch (error) {
      console.error("Error finding lands:", error);
    }
  }
findLands()  
async function findHouses(criteria = {}) {
    try {
      const houses = await House.find(criteria);
      console.log("Found houses:", houses);
    } catch (error) {
      console.error("Error finding houses:", error);
    }
  }
    
findHouses({ land_in_acre: { $gt: 20 } }); // $gt stands for "greater than"
