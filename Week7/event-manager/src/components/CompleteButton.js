import React from "react";

const CompleteButton = (props) => {
  const isComplete = () => {
    let isCompleted = true;
    let eventColor = "grey-bg";
    return isCompleted;
  };
  return (
    <div>
      <button onClick={isComplete} id="complete-button">
        Completed
      </button>
    </div>
  );
};

export default CompleteButton;
