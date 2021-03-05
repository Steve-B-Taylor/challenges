import React, { useState } from "react";
import TravelList from "./TravelList";

const App = (props) => {
  const [selectedPlaceID, setSelectedPlaceID] = useState();
  let tagline;
  if (selectedPlaceID === props.data.favoritePlaceId) {
    // favoritePlace = true;
    tagline = <div>What a beauty!</div>;
  }

  return (
    <div id="wishlist-div">
      <div className="grid-container">
        <div className="small-12 text-center">
          <h3>Wanderlust Wishlist</h3>
          <TravelList
            data={props.data}
            setSelectedPlaceID={setSelectedPlaceID}
          />
          {tagline}
        </div>
      </div>
    </div>
  );
};

export default App;
