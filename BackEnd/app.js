const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const PORT = 8000;
const app = express();

app.use(express.json());
app.use(cors());

// Conexión a MongoDB Atlas
const URL = `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_CLUSTER}.b4lvmyd.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`;
mongoose.connect(URL, { useNewUrlParser: true });

const db = mongoose.connection;

db.once("connected", () => {
  console.log("Database connected");
});

db.on("disconnected", () => {
  console.log("Database disconnected");
});

db.on("error", (error) => {
  console.log("Database error", error);
});

// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_CLUSTER}.b4lvmyd.mongodb.net/?retryWrites=true&w=majority`;

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//     const database = client.db("wishlist");
//     const collection = database.collection("users");
//     const user = await collection.find().toArray();
//     // console.log(user);
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);


const user = require("./Controller/userController");
app.use("/", user);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

