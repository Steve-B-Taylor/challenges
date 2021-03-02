import React from "react";
import Grocery from "./Grocery";

const GroceryList = (props) => {
  const groceryItems = props.groceries.map((item) => (
    <Grocery
      id={item.id}
      name={item.name}
      buttonClick={props.buttonClick}
      key={item.id}
    />
  ));

  return <ul>{groceryItems}</ul>;
};

export default GroceryList;
