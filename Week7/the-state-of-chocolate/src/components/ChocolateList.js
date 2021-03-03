import React from 'react';

const ChocolateList = (props) => {

  const chocolateData = [
    "Cadbury Chocolate Bar",
    "Lindt 90% Dark Chocolate",
    "Hershey's Special Dark",
    "Lily's Sugar Free Chocolate",
    "Crunch",
    "Toblerone"
  ]

  let chocolateListItems = chocolateData.map((chocolate) => {
    return(
      <li>
        {chocolate}
      </li>
    )
  })

  return(
    <div id="chocolate-app">
      <h1>CHOCOLATE ONLY CABINET</h1>
      <ul>
        {chocolateListItems}
      </ul>
    </div>
  )
}

export default ChocolateList;
