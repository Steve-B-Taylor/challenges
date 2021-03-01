// src/components/Header.js
import React from "react";

const Header = (props) => {
  const text = "I am a React element! Hear me roarer!";
  const roarAtMe = () => {
    alert("Roar!");
  };

  return (
    <h1 id="special-header" className="header" onClick={roarAtMe}>
      {text}
    </h1>
  );
};

export default Header;
