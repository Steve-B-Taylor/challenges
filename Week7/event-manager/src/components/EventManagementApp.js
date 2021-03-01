import React from "react";
import EventTile from "./EventTile";
import DogImage from "./DogImage";

const EventManagementApp = (props) => {
  const events = [
    {
      title: "Brunch with Werewolves",
      timePeriod: "10:00am - 12:00pm",
      description: null,
      eventType: "personal",
    },
    {
      title: "Strategy Meeting with the Finfolk on New Import Tariffs",
      timePeriod: "1:00pm - 2:00pm",
      description: "The World Wizardry Workgroup hit us hard on these tariffs.",
      eventType: "business",
    },
    {
      title: "Award Ceremony for Amrita the Banshee",
      timePeriod: "2:00pm - 3:00pm",
      description: "Bring earplugs, have fun.",
      eventType: "business-casual",
    },
    {
      title: "Djinn Tech Support with the Qamar and Caliope",
      timePeriod: "4:00pm - 5:00pm",
      description: "Computers are down, let them work their magic.",
      eventType: "business",
    },
  ];
  console.log(events[1].timePeriod);
  // events.forEach((event) => {
  //   let title = event;
  // });

  return (
    <div className="event-management-app">
      <h1>Now viewing your upcoming events</h1>
      <EventTile
        title={events[0].title}
        timePeriod={events[0].timePeriod}
        description={events[0].description}
        eventType={events[0].eventType}
      />
      <EventTile
        title={events[1].title}
        timePeriod={events[1].timePeriod}
        description={events[1].description}
        eventType={events[1].eventType}
      />
      <EventTile
        title={events[2].title}
        timePeriod={events[2].timePeriod}
        description={events[2].description}
        eventType={events[2].eventType}
      />
      <EventTile
        title={events[3].title}
        timePeriod={events[3].timePeriod}
        description={events[3].description}
        eventType={events[3].eventType}
      />
      <DogImage />
    </div>
  );
};

export default EventManagementApp;
