import React from "react";
import PerformanceList from "./PerformanceList";

const Popup = (props) => {
  return (
    <div className="popup-parent">
      <div id="popup-container" className="popup-child-1">
        <i id="close-x" className="fas fa-times"></i>
        <h2 id="title">You have won tickets to see Taylor Swift!!!</h2>
        <h4 id="body">
          Please enter your email so we can send you the tickets
        </h4>
        <form id="email-form">
          <label htmlFor="email">
            <input type="text" id="email" name="email"></input>
            <input type="submit" id="submit" value="CLAIM YOUR PRIZE!"></input>
          </label>
        </form>
        <PerformanceList />
      </div>
    </div>
  );
};

export default Popup;
