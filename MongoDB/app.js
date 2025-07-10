const { MongoClient } = require('mongodb');
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url, { serverSelectionTimeoutMS: 5000 });

console.log("Connecting to MongoDB...");

client.connect()
  .then(() => {
    // console.log("Database created!");
    // return client.close();

    // var dbo = client.db("nodemongo");
    // dbo.createCollection("customers").then(res => {
    //   console.log("Collection created!");
    //   client.close();
    // }).catch(err => {
    //   console.error("Error creating collection", err);
    // });

    // var dbo = client.db("nodemongo");
    // var custData = {
    //   name: "WU",
    //   address: "Irvine, CA"
    // };
    // dbo.collection("customers").insertOne(custData).then(res => {
    //   console.log("1 document inserted!");
    //   client.close();
    // }).catch(err => {
    //   console.error("Error inserting document", err);
    // });

    var dbo = client.db("nodemongo");
    // var custData = [
    //     { name: 'John', address: 'Highway 71' },
    //     { name: 'Peter', address: 'Lowstreet 4' },
    //     { name: 'Amy', address: 'Apple st 652' },
    //     { name: 'Hannah', address: 'Mountain 21' },
    //     { name: 'Michael', address: 'Valley 345' },
    //     { name: 'Sandy', address: 'Ocean blvd 2' },
    //     { name: 'Betty', address: 'Green Grass 1' },
    //     { name: 'Richard', address: 'Sky st 331' },
    //     { name: 'Susan', address: 'One way 98' },
    //     { name: 'Vicky', address: 'Yellow Garden 2' },
    //     { name: 'Ben', address: 'Park Lane 38' },
    //     { name: 'William', address: 'Central st 954' },
    //     { name: 'Chuck', address: 'Main Road 989' },
    //     { name: 'Viola', address: 'Sideway 1633' }
    // ];
      
    // dbo.collection("customers").insertMany(custData).then(res => {
    //   console.log("Number of documents inserted: " + res.insertedCount);
    //   client.close();
    // }).catch(err => {
    //   console.error("Error inserting document", err);
    // });

    // dbo.collection("customers").find({}).toArray().then(res => {
    //   console.log(res);
    //   client.close();
    // }).catch(err => {
    //   console.error("Error finding documents", err);
    // });

    // var query = { address: "Park Lane 38" };
    // dbo.collection("customers").find(query).toArray().then(res => {
    //   console.log(res);
    //   client.close();
    // }).catch(err => {
    //   console.error("Error finding documents", err);
    // });
    
    // var mysort = { name: 1 };
    // dbo.collection("customers").find({}).sort(mysort).toArray().then(res => {
    //   console.log(res);
    //   client.close();
    // }).catch(err => {
    //   console.error("Error finding documents", err);
    // });

    // var myquery = { address: "Mountain 21" };
    // dbo.collection("customers").deleteOne(myquery).then(res => {
    //   console.log("Number of documents deleted: " + res.deletedCount);
    //   client.close();
    // }).catch(err => {
    //   console.error("Error deleting document", err);
    // });

    var myquery = { address: "Valley 345" };
    var newvalues = { $set: { name: "Mickey", address: "Canyon 123" } };
    dbo.collection("customers").updateOne(myquery, newvalues).then(res => {
      console.log("Number of documents updated: " + res.modifiedCount);
      client.close();
    }).catch(err => {
      console.error("Error updating document", err);
    });

  })
  .catch(err => {
    console.error("Error connecting to MongoDB", err);
  });
