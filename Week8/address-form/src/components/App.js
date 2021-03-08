import React, { useState } from "react";

import AddressForm from "./AddressForm";

const App = (props) => {
  const [shipInfo, setShipInfo] = useState([]);
  const shipInfoSubmittedHandler = (info) => {
    setShipInfo([...shipInfo, info]);
  };

  return (
    <div className="grid-container">
      <div className="medium-6 medium-offset-3 small-12">
        <AddressForm onInfoSubmitted={shipInfoSubmittedHandler} />
      </div>
    </div>
  );
};

export default App;
