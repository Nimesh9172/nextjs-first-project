import MeetupDetail from "@/app/components/meetups/MeetupDetail"



function getData(id){
    const meetupData =  {
        id: "m1",
        title: "A First meetup",
        image:
          "https://www.hillel.org/wp-content/uploads/college-images/University_of_Toronto_St_George.png",
        address: "first address 9172232",
        description: "This is a second meetup",
      }
    return meetupData
}

const MeetupDetailPage = ({params}) => {

    const getMeetupData = getData(params.meetupId)

    return (
       <MeetupDetail image={getMeetupData.image} title={getMeetupData.title} description={getMeetupData.description}/>
    )
}
export default MeetupDetailPage