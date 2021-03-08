import React, { useState } from "react";

const ReviewForm = (props) => {
  const [newReview, setNewReview] = useState({
    name: "",
    rating: "",
    content: "",
  });

  const handleChange = (event) => {
    event.preventDefault();
    setNewReview({
      ...newReview,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addReview(newReview);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">
          Your name:
          <input
            id="name"
            type="text"
            name="name"
            value={newReview.name}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="rating">
          Rating
          <input
            id="rating"
            type="text"
            name="rating"
            value={newReview.rating}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="content">
          Comment
          <input
            id="content"
            name="content"
            type="text"
            value={newReview.content}
            onChange={handleChange}
          />
        </label>
        <br></br>
        <input type="submit" value="Add Review" />
      </div>
    </form>
  );
};

export default ReviewForm;
