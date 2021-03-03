import React from "react";

const Playlist = (props) => {
  let className;
  if (props.selectedStatus) {
    className = "selected";
  }
  return (
    <ul>
      <li onClick={props.onClick} className={className}>
        {props.data.name}
      </li>
    </ul>
  );
};

export default Playlist;
