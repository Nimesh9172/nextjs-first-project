
// 'use client'
import MeetupList from "./components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First meetup",
    image:
      "https://www.hillel.org/wp-content/uploads/college-images/University_of_Toronto_St_George.png",
    address: "first address 9172232",
    description: "This is a second meetup",
  },
  {
    id: "m2",
    title: "A Second meetup",
    image:
    "https://www.hillel.org/wp-content/uploads/college-images/University_of_Toronto_St_George.png",
    address: "Some address 12345",
    description: "This is a second meetup",
  },
];


async function getData(){

  const data = DUMMY_MEETUPS
  return data

}

export default async function Home(props) {

  const data = await getData()
  console.log(data)
  return <MeetupList meetups={data} />;
}


export const revalidate = 10
