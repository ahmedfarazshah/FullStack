const { MongoClient } = require("mongodb");
const assert = require("assert"); // this is for the testing purpose like assert.equal(err, null) check for error 
const { cachedDataVersionTag } = require("v8");

// Replace the uri string with your connection string.
const uri = "mongodb://localhost:27017";

const client = new MongoClient(uri);
// creating and inserting database, collection, and database

async function run() {
  try {
    const database = client.db('fruits_db');
    const summer_fruits = database.collection('summer');
    const winter_fruits = database.collection("winter")
    
    //listing summer fruits
    const mango = { fruitName: 'Mango', season: "Summer" };
    const apple = {fruitName : "Apple", season : "Summer"}
    const blueberries = {fruitName : "Blueberries", season : "Summer"}
    const cherry= {fruitName : "cherry", season : "Summer"}

    // inserting values in the collection
    await summer_fruits.insertMany([mango, apple, blueberries, cherry])
    // for finding / quering the values in the collecion
    const summerfruits = await summer_fruits.find();
    const winterfruits = await winter_fruits.find()
    
    insertDocuments(database)
    
    
//    You can use this to display in the console as it uses a for loop
    // console.log("Summer Fruits:");
    // for await (const fruit of summerfruits) {
    //   console.log(fruit);
    // }
    // console.log("winter Fruits")
    // for await (const fruit of winterfruits){
    //   console.log(fruit)
    // }
// or this was used earlier back in the days
    // summer_fruits.find().toArray(function(data){console.log(data)})
    try {
      const summerFruits = await winter_fruits.find().toArray(); // better than using loops i guess
      console.log(summerFruits);
    } catch (error) {
      console.error("Error fetching fruits:", error);
    }


  } finally {
    // Ensures that the client will close when you finish/error
    
    await client.close();
  }
}

// inserting using a function expression
const insertDocuments = function (db){
  // get the documents collection
  const collection = db.collection("winter")
  //insert some documnents // with the assert to add testing features 
  collection.insertMany([{name : "Harmit", season : "winter"}, {name : "Orange", season : "winter"}], function (err, result){
      assert.equal(err, null)
      assert.equal(2, result.result.n) // both the below one and this one ensures that 2 entries are entered 
      assert.equal(2, result.ops.lenth)
      console.log("inserted 2 douments into the collection")
  })

}







run().catch(console.dir);



