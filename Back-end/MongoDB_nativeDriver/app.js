const { MongoClient } = require("mongodb");


// Replace the uri string with your connection string.
const uri = "mongodb://localhost:27017";

const client = new MongoClient(uri);
// creating and inserting database, collection, and database

async function run() {
  try {
    const database = client.db('fruits_db');
    const summer_fruits = database.collection('summer');
    
    //listing summer fruits
    const mango = { fruitName: 'Mango', season: "Summer" };
    const apple = {fruitName : "Apple", season : "Summer"}
    const blueberries = {fruitName : "Blueberries", season : "Summer"}
    const cherry= {fruitName : "cherry", season : "Summer"}

    // inserting values in the collection
    await summer_fruits.insertMany([mango, apple, blueberries, cherry])
    // for finding / quering the values in the collecion
    const summerfruits = await summer_fruits.find();

    // You can use this to display in the console as it uses a for loop
    console.log("Summer Fruits:");
    for await (const fruit of summerfruits) {
      console.log(fruit);
    }

  } finally {
    // Ensures that the client will close when you finish/error


    await client.close();
  }
}
run().catch(console.dir);



