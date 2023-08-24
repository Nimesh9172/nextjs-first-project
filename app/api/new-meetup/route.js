import { NextResponse } from "next/server";
import createMongoClient from "@/app/db/db";

export async function POST(req, res) {
  const body = await req.json();
  const client = await createMongoClient();

  try {
    const database = client.db("first_db");
    const myColl = database.collection("meetup");
    const result = await myColl.insertOne(body);
    console.log(`A document was inserted with the _id: ${result.insertedId}`);
    return NextResponse.json(
      { message: "Data inserted successfully" },
      { status: 201 }
    );
  } catch (err) {
    console.log(err);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
