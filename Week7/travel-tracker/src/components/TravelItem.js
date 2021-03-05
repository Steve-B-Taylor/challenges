import React, { useState } from "react";

const TravelItem = ({ name, triggerSelected }) => {
  const [itemDone, setItemDone] = useState(false);

  let crossOffItem = itemDone ? "done" : "";
  const handleClick = () => {
    setItemDone(!itemDone);
    triggerSelected();
  };

  return (
    <div>
      <ul>
        <li onClick={handleClick} className={crossOffItem}>
          {name}
        </li>
      </ul>
    </div>
  );
};

export default TravelItem;
