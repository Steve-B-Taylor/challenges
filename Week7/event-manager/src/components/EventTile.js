import React from "react";

const EventTile = (props) => {
  let eventColor = "";
  switch (props.eventType) {
    case "personal":
      eventColor = "green-bg";
      break;
    case "business":
      eventColor = "pink-bg";
      break;
    case "business-casual":
      eventColor = "blue-bg";
  }

  return (
    <div className={eventColor}>
      <h2>{props.title}</h2>
      <p>{props.timePeriod}</p>
      <p>{props.description}</p>
    </div>
  );
};

export default EventTile;
