import React from "react";
import ReactDOM from "react-dom";
import data from "./constants/data";
import App from "./components/App";
import "./stylesheets/app.css";

ReactDOM.render(<App data={data} />, document.getElementById("app"));
