import React from "react";

const Song = (props) => {
  let className;
  if (props.selectedStatus) {
    className = "selected";
  }
  return (
    <ul>
      <li onClick={props.onClick} className={className}>
        {props.data.artist} - {props.data.name}
      </li>
    </ul>
  );
};

export default Song;
