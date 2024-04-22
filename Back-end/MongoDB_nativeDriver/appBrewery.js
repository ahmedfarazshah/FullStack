////////////////////////// depricated one
const MongoClient = require("mongodb");

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

///////////////////////////////////////////////////////////////////////

////////////////// this is not depricated but is ideal for adding values in the async function
// for inserting documents now the documents are added using a async function
const insertDocuments = function (db, callback){
    // get the documents collection
    const collection = db.collection("documents")
    //insert some documnents // with the assert to add testing features 
    collection.insertMany([{a:1}, {a:2}], function (err, result){
        assert.equal(err, null)
        assert.equal(2, result.result.n) // both the below one and this one ensures that 2 entries are entered 
        assert.equal(2, result.ops.lenth)
        console.log("inserted 2 douments into the collection")
        callback(result);
    })

}// and then it would have been called in the client.connect(depricated) as insertDocument(db, callback )


// NOW  THIS IS USED TO INSERT SOME VALUES INTO THE COLLECTION
async function run() {
    try {
      // Connect to the "insertDB" database and access its "haiku" collection
      const database = client.db("insertDB");
      const haiku = database.collection("haiku");
      
      // Create a document to insert
      const doc = {
        title: "Record of a Shriveled Datum",
        content: "No bytes, no problem. Just insert a document, in MongoDB",
      }
      // Insert the defined document into the "haiku" collection
      const result = await haiku.insertOne(doc);
      // Print the ID of the inserted document
      console.log(`A document was inserted with the _id: ${result.insertedId}`);
    } finally {
       // Close the MongoDB client connection
      await client.close();
    }
  }
  // Run the function and handle any errors
  run().catch(console.dir);





  //////////////////////////////// finding documents

  const findDocs = function(db){
    // Get the documents collection
    const collecion = db.collecion("winter")
    // find some documents
    collection.find().toArray(function(err, docs){
      assert.equal(null, err);
      console.log("Found the following records")
      console.log(docs)
    })
  }