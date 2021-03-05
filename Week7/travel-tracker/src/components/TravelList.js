import React from "react";
import TravelItem from "./TravelItem";

const TravelList = (props) => {
  const favoritePlaceId = props.data.favoritePlaceId;
  let setSelectedPlaceID = props.setSelectedPlaceID;

  const places = props.data.places.map((place) => {
    let triggerSelected = () => {
      setSelectedPlaceID(place.id);
    };

    return (
      <span key={place.id}>
        <TravelItem
          key={place.id}
          name={place.name}
          triggerSelected={triggerSelected}
        />
      </span>
    );
  });

  return (
    <div>
      <ul>{places}</ul>
    </div>
  );
};

export default TravelList;
