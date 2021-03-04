import React, { useState } from "react";

const ChocolateList = (props) => {
  const [chocolateClicked, setChocolateClicked] = useState(null);

  const chocolateData = [
    "Cadbury Chocolate Bar",
    "Lindt 90% Dark Chocolate",
    "Hershey's Special Dark",
    "Lily's Sugar Free Chocolate",
    "Crunch",
    "Toblerone",
  ];

  const chocolateClick = (event) => {
    setChocolateClicked(!chocolateClicked);
  };

  let chocolateId = 0;
  let chocolateListItems;

  if (chocolateClicked) {
    chocolateListItems = chocolateData.map((chocolate) => {
      chocolateId++;
      return <li key={chocolateId}>{chocolate}</li>;
    });
  }

  return (
    <div id="chocolate-app">
      <h1 onClick={() => chocolateClick()}>CHOCOLATE ONLY CABINET</h1>
      <ul>{chocolateListItems}</ul>
    </div>
  );
};

export default ChocolateList;
