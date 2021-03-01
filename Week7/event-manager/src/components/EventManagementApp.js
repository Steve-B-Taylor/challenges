import React from "react";
import EventTile from "./EventTile";
import DogImage from "./DogImage";
import CrankyButton from "./CrankyButton";
import EventInfo from "./EventInfo";

const EventManagementApp = (props) => {
  const events = EventInfo.map((event) => {
    return (
      <EventTile
        key={event.id}
        title={event.title}
        timePeriod={event.timePeriod}
        description={event.description}
        eventType={event.eventType}
        // eventColor={eventColor}
      />
    );
  });
  return (
    <div className="event-management-app">
      <CrankyButton />
      <h1>Now viewing your upcoming events</h1>
      {events}
      <DogImage />
    </div>
  );
};

export default EventManagementApp;
