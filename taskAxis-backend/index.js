const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_user}:${process.env.DB_pass}@cluster0.xwakput.mongodb.net/?appName=Cluster0`;



const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // await client.connect();

    // Collections
    const taskCollection = client.db("taskDB").collection("tasks");
    const bidsCollection = client.db("taskDB").collection("bids");

    // HTTP Get Methods
    app.get("/tasks", async (req, res) => {
      const userEmail = req.query.email;
      let query = {};
      if (userEmail) {
        query = { email: userEmail };
      }
      const result = await taskCollection.find(query).toArray();
      res.send(result);
    });
    app.get("/tasks/featureTask", async (req, res) => {
      const sortOption = { deadline: 1 };
      const result = await taskCollection
        .find()
        .sort(sortOption)
        .limit(6)
        .toArray();
      res.send(result);
    });
    app.get("/tasks/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await taskCollection.findOne(query);
      res.send(result);
    });


    //get bids
    app.get("/bids/:taskId", async (req, res) => {
      const id = req.params.taskId;
      const query = { taskId: id };
      const result = await bidsCollection.find(query).toArray();
      res.send(result);
    });
    //add bidders into DB
    app.post("/bids", async (req, res) => {
      const bidderData = req.body;
      const result = await bidsCollection.insertOne(bidderData);
      res.send(result);
    });
    // Add task into db
    app.post("/tasks", async (req, res) => {
      const taskData = req.body;
      const result = await taskCollection.insertOne(taskData);
      res.send(result);
    });

    // HTTP Put/Patch methods
    app.put("/tasks/:id", async (req, res) => {
      const id = req.params.id;
      const updatedTask = req.body;
      const filter = { _id: new ObjectId(id) };
      const updatedDoc = {
        $set: updatedTask,
      };
      const result = await taskCollection.updateOne(filter, updatedDoc);
      res.send(result);
    });
    // Update Bid count
    app.patch("/tasks/:id/bidCount", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const updateCount = {
        $inc: { bidCount: 1 },
      };
      const result = await taskCollection.updateOne(filter, updateCount);
      res.send(result);
    });

    //Delete Method
    app.delete("/tasks/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await taskCollection.deleteOne(query);
      res.send(result);
    });
    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ping: 1});
    // console.log(
    //   "Pinged your deployment. You successfully connected to MongoDB!"
    // );
  } finally {
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
