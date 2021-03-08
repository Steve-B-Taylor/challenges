import React from "react";

import Review from "./Review";

const ReviewList = (props) => {
  const reviewTiles = props.reviewsData.map((review) => {
    return (
      <span key={review.id}>
        <Review
          id={review.id}
          name={review.name}
          rating={review.rating}
          content={review.content}
        />
      </span>
    );
  });
  return <div>{reviewTiles}</div>;
};

export default ReviewList;
