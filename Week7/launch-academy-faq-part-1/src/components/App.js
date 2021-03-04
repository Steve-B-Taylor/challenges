import React from "react";
import FaqList from "./FaqList";

const App = (props) => {
  return (
    <div className="container">
      <h1>We're here to help</h1>
      <FaqList faqData={props.data} />
    </div>
  );
};

export default App;
