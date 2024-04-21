const { MongoClient } = require("mongodb");
const assert = require("assert")

// Connection URL.
const url = "mongodb://localhost:27017";

// DataBase Name
const dbName = "Fruits"

//create a new mongo client
const client = new MongoClient(url);

// use connect method to connect to the server
client.connect(err=>{
    assert.equal(null , err)
    console.log("Connected to the server successfuly")
    
    const db = client.db(dbName)
    client.close()
})