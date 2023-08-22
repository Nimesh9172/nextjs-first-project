'use client'

import NewMeetupForm from "../components/meetups/NewMeetupForm"

const NewMeetupPage = () => {

    const addMeetupHandler = async (meetupData) => {
        console.log(meetupData)
        const response =  await fetch('/api/new-meetup')

        const data = await response.json()

        console.log(data)

    }

    return <NewMeetupForm onAddMeetup={addMeetupHandler}/> 
}

export default NewMeetupPage


