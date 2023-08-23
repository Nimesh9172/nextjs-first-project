"use client";

import NewMeetupForm from "../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
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

      const data =  response;
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
};

export default NewMeetupPage;
