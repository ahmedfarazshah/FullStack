const { MongoClient } = require('mongodb');

const uri = "mongodb://localhost:27017"; // Replace with your MongoDB connection string
const client = new MongoClient(uri);

client.connect(err => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Hello, MongoDB!");
  client.close();
});
