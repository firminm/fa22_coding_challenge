const mongoose = require("mongoose");

// Can only read/write to FirmScore/h4i/tasks


// const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://h4i-challenge:2rwviDkeeDEODuOw@cluster0.a1oh1yo.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// mongoose.connect(err => {
//   const collection = client.db("test").collection("tasks");
//   client.close();
// });


module.exports = async () => {
  try {
    const connectionParams = {
      useNewUrlParser: true,
    };
    await mongoose.connect(
      uri
      );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Could not connect to database", error);
  }
};
