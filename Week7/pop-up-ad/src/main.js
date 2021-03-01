import "./app.scss";

// import depencies like React and ReactDOM
import React from "react";
import ReactDOM from "react-dom";

// import components, if rendered in ReactDOM.render
import Popup from "./components/Popup";

// call on ReactDOM.render with the correct arguments

// class App extends React.Component {
//   render() {
//     return (
//       <div className="popup-parent">
//         <div className="popup-child-1">
//           <Popup />
//         </div>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<App />, document.getElementById("app"));
ReactDOM.render(<Popup />, document.getElementById("app"));
