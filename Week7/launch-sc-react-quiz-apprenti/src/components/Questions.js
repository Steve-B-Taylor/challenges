import React from "react";

const Questions = (props) => {
  const classN = " answer " + props.selectQuestion;
  return (
    <div onClick={props.handleClick} className={classN}>
      {props.choices}
    </div>
  );
};

export default Questions;
