import React from "react";

import Review from "./Review";

const ReviewList = (props) => {
  const reviewsList = props.data.map((review) => {
    console.log(review.id);
    const id = review.id;
    const clientName = review.name;
    const rating = review.rating;
    const content = review.content;

    return (
      <Review id={id} name={clientName} rating={rating} content={content} />
    );
  });
  return <div>{Review}</div>;
};

export default ReviewList;
