import React, { useState } from "react";
import TravelList from "./TravelList";

const App = (props) => {
  return (
    <div id="wishlist-div">
      <div className="grid-container">
        <div className="small-12 text-center">
          <h3>Wanderlust Wishlist</h3>
          <TravelList data={props.data} />
        </div>
      </div>
    </div>
  );
};

export default App;
