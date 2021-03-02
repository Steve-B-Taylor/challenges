import React from "react";

const Grocery = (props) => {
  return (
    <li id={props.id}>
      {props.name} <button onClick={props.buttonClick}>Delete</button>
    </li>
  );
};

export default Grocery;
