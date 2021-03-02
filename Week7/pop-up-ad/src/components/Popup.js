import React from "react";
import PerformanceList from "./PerformanceList";

const Popup = (props) => {
  const handleExit = () => {
    confirm("Are you sure you don't want to see Tay Swift???");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Congrats on your tix!");
  };
  return (
    <div className="popup-parent">
      <div id="popup-container" className="popup-child-1">
        <i id="close-x" className="fas fa-times" onClick={handleExit}></i>
        <h2 id="title">You have won tickets to see Taylor Swift!!!</h2>
        <h4 id="body">
          Please enter your email so we can send you the tickets
        </h4>
        <form id="email-form">
          <label htmlFor="email">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email here"
            ></input>
            <input
              type="submit"
              id="submit"
              value="CLAIM YOUR PRIZE!"
              onClick={handleSubmit}
            ></input>
          </label>
        </form>
        <PerformanceList />
      </div>
    </div>
  );
};

export default Popup;
