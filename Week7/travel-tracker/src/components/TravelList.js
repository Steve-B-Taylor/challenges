import React, { useState } from "react";
import TravelItem from "./TravelItem";

const TravelList = (props) => {
  const [selectedPlaceID, setSelectedPlaceID] = useState(null);
  // console.log(props.data.favoritePlaceId);
  const favoritePlaceId = props.data.favoritePlaceId;
  let tagline;

  const places = props.data.places.map((place) => {
    const selectPlaceFunction = () => {
      if (place.id === selectedPlaceID) {
        return setSelectedPlaceID(null);
      } else {
        return setSelectedPlaceID(place.id);
      }
    };
    let placeSelected = false;
    let favoritePlace = false;
    if (selectedPlaceID === place.id) {
      placeSelected = true;
      if (favoritePlaceId === place.id) {
        favoritePlace = true;
        tagline = <p>What a beauty!</p>;
      }
    }

    return (
      <span key={place.id}>
        <TravelItem
          key={place.id}
          name={place.name}
          handleClick={selectPlaceFunction}
          placeSelected={placeSelected}
          favoritePlace={favoritePlace}
        />
      </span>
    );
  });

  return (
    <div>
      <ul>{places}</ul>
      <div>{tagline}</div>
    </div>
  );
};

export default TravelList;
