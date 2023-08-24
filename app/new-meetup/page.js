"use client";

import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useRouter } from "next/navigation";

const NewMeetupPage = () => {


  const router = useRouter()

  const addMeetupHandler = async (meetupData) => {
    try {
      const response = await fetch("/api/new-meetup",{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body:JSON.stringify(meetupData)
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
    router.push('/')

  };

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
};

export default NewMeetupPage;
