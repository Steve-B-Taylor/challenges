import React, { useState } from "react";

const MealForm = (props) => {
  return (
    <form className="callout">
      <label htmlFor="food">
        I ate:
        <input type="text" name="food" />
      </label>

      <div className="button-group">
        <button className="button">Clear</button>
        <input className="button" type="submit" value="Submit" />
      </div>
    </form>
  );
};

export default MealForm;
