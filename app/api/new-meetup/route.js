import { MongoClient, ServerApiVersion } from "mongodb";
import { NextResponse } from "next/server";

const uri =
  "mongodb+srv://nimesh:5UtJ1qb93zf9iIMC@cluster0.01ne6v4.mongodb.net";

export async function POST(req, res) {
  const body = await req.json();

  // // Create a MongoClient with a MongoClientOptions object to set the Stable API version
  const client = new MongoClient(uri);

  try {
    const database = client.db("first_db");
    const myColl = database.collection("meetup");
    const result = await myColl.insertOne(body);
    console.log(`A document was inserted with the _id: ${result.insertedId}`);
    return NextResponse.json(
      { message: "Please enter title" },
      { status: 201 }
    );
  } catch (err) {
    console.log(err);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
