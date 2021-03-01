import React from "react";
import ReactDOM from "react-dom";

import "./styles/app.scss";
import EventManagementApp from "./components/EventManagementApp";

ReactDOM.render(
  <div>
    <EventManagementApp />
  </div>,
  document.getElementById("app")
);
