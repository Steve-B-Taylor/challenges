import React, { useState } from "react";

const Questions = (props) => {
  const [selectedQuestionId, setSelectedQuestionId] = useState();
  let selectQuestion = "answer";

  const handleClick = () => {
    setSelectedQuestionId(!selectedQuestionId);
    props.triggerSelected();
  };

  return (
    <div onClick={handleClick} className={selectQuestion}>
      {props.choices}
    </div>
  );
};

export default Questions;
