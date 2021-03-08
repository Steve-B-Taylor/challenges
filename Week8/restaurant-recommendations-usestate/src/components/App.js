import React, { useState } from "react";

import Restaurant from "./Restaurant";

import reviews from "../constants/reviews";
import ReviewList from "./ReviewList";

const App = (props) => {
  const [reviews, setReviews] = useState(reviews);

  return (
    <div className="grid-container">
      <div className="grid-x">
        <div className="restaurants cell small-3">
          <h3>Restaurants</h3>
          <Restaurant />
        </div>

        <div className="reviews cell auto grid-x">
          <div className="cell">
            <h3>Review Form</h3>
            <ReviewList data={reviews} />
            // future review form component here
          </div>

          <div className="cell">
            <h3>Reviews</h3>
            // future review list component here
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
