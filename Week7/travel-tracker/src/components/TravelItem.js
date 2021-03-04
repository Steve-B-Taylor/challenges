import React from "react";

const TravelItem = (props) => {
  let place = props.name;
  let itemDone;
  if (props.placeSelected) {
    itemDone = "done";
  }

  return (
    <div>
      <ul>
        <li onClick={props.handleClick} className={itemDone}>
          {place}
        </li>
      </ul>
    </div>
  );
};

export default TravelItem;
