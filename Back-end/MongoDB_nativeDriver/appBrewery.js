const assert = require("assert")


// for inserting documents now the documents are added using a async function
const insertDocuments = function (db, callback){
    // get the documents collection
    const collection = db.collection("documents")
    //insert some documnents
    collection.insertMany([{a:1}, {a:2}], function (err, result){
        assert.equal(err, null)
        assert.equal(3, result.result.n)
        assert.equal(3, result.ops.lenth)
        console.log("inserted 2 douments into the collection")
        callback(result);
    })

}


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