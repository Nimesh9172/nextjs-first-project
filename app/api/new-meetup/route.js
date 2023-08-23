import { MongoClient, ServerApiVersion } from "mongodb";
import { NextResponse } from "next/server";

const uri =
  "mongodb+srv://nimesh:61oWf7qUduCI7w4x@cluster0.01ne6v4.mongodb.net/first_db/?retryWrites=true&w=majority";

export async function POST(req, res) {
  const body = await req.json();

  // Create a MongoClient with a MongoClientOptions object to set the Stable API version
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });
  async function run() {
    try {
      // Connect the client to the server	(optional starting in v4.7)
      await client.connect();
      // Send a ping to confirm a successful connection
      const client = await client.db("first_db");
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
  run().catch(console.dir);

  return NextResponse.json({ message: "Please enter title" }, { status: 201 });
}
