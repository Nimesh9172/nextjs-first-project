// 'use client'
import { Fragment } from "react";
import MeetupList from "./components/meetups/MeetupList";
import createMongoClient from "./db/db";

export const revalidate = 10

async function getData() {

  const client = await createMongoClient();

  try {
    const database = client.db("first_db");
    const myColl = database.collection("meetup");
    const query = {};
    const result = await myColl.find(query).toArray();
    const data =  result.map(item => ({id:item._id.toString(),title:item.title,address:item.address,description:item.description,image:item.image}))
    return data
  } catch (err) {
    console.log(err);
    return []
  }
}

export default async function Home() {
  const data = await getData();
  return (
    <Fragment>
      <Head>
        <title></title>
      </Head>
      <MeetupList meetups={data} />
    </Fragment>
  );
}

