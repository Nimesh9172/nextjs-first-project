import createMongoClient from "@/app/db/db";
import { NextResponse } from "next/server";

export const GET = async (request) => {

  const client = await createMongoClient();

  try {
    const database = client.db("first_db");
    const myColl = database.collection("meetup");
    const query = {};
    const result = await myColl.find(query).toArray();
    console.log(result)
    return NextResponse.json(
      { message: "Data Fetched Successfully", data: result },
      { status: 200 }
    );
  } catch (err) {
    console.log(err);
  }
};
