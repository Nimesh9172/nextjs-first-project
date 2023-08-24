import MeetupDetail from "@/app/components/meetups/MeetupDetail";
import createMongoClient from "@/app/db/db";
import { ObjectId } from "mongodb";

async function getData(id) {

  const client = await createMongoClient();

  try {
    const database = client.db("first_db");
    const myColl = database.collection("meetup");
    const query = {_id:new ObjectId(id)};
    const result = await myColl.findOne(query);

    return result
  } catch (err) {
    console.log(err);
  }
}

const MeetupDetailPage = async ({ params }) => {
  const getMeetupData = await getData(params.meetupId);

  console.log(getMeetupData)

  return (
    <MeetupDetail
      image={getMeetupData.image}
      title={getMeetupData.title}
      description={getMeetupData.description}
    />
  );
};
export default MeetupDetailPage;
