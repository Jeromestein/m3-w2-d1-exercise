const { MongoClient } = require('mongodb');
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url, { serverSelectionTimeoutMS: 5000 });

console.log("Connecting to MongoDB...");

client.connect()
  .then(() => {
    // console.log("Database created!");
    // return client.close();
    var dbo = client.db("nodemongo");
    dbo.createCollection("customers").then(res => {
      console.log("Collection created!");
      client.close();
    }).catch(err => {
      console.error("Error creating collection", err);
    });
  })
  .catch(err => {
    console.error("Error connecting to MongoDB", err);
  });
