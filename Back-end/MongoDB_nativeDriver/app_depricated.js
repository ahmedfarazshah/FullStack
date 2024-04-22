const { MongoClient } = require("mongodb");
const assert = require("assert") // for testing nodejs applications

// Connection URL.
const url = "mongodb://localhost:27017";

// DataBase Name
const dbName = "FruitsDB"

//create a new mongo client
const client = new MongoClient(url);

// use connect method to connect to the server
client.connect(err=>{
    assert.equal(null , err) // if everthing happens without an error then it will run console.log
    console.log("Connected to the server successfuly") 
    
    const db = client.db(dbName)
    client.close()
})