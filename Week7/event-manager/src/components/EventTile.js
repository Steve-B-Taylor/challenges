import React from "react";
import CompleteButton from "./CompleteButton";

const EventTile = (props) => {
  let eventColor = "event-tile";
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

  const isComplete = () => {
    let isCompleted = true;
    eventColor = "grey-bg";
    console.log(`isCompleted: ${isCompleted}`);

    return eventColor;
  };

  return (
    <div>
      <div>
        <button onClick={isComplete} id="complete-button">
          Completed
        </button>
      </div>
      <div className={eventColor}>
        {/* <div id="complete-button">
          <CompleteButton />
        </div> */}

        <h2>{props.title}</h2>
        <p>{props.timePeriod}</p>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default EventTile;
