import MeetupList from "./components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A Firstt meetup",
    image:
      "https://www.hillel.org/wp-content/uploads/college-images/University_of_Toronto_St_George.png",
    address: "first address 9172232",
    description: "This is a second meetup",
  },
  {
    id: "m2",
    title: "A Second meetup",
    image:
      "https://commonwealthmagazine.org/wp-content/uploads/2016/05/5561058399_2adf917870_k.jpg",
    address: "Some address 12345",
    description: "This is a second meetup",
  },
];

export default function Home() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}
