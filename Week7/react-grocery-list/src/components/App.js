import React from "react";
import GroceryList from "./GroceryList";

const App = (props) => {
  const groceryData = [
    { id: 1, name: "Oranges" },
    { id: 2, name: "Bananas" },
    { id: 3, name: "Bread" },
  ];
  const buttonClick = (event) => {
    window.alert("a button was clicked");
  };
  return (
    <div>
      <h1>Grocery List</h1>
      <GroceryList groceries={groceryData} buttonClick={buttonClick} />
    </div>
  );
};

export default App;
