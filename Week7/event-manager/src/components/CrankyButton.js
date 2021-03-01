import React from "react";

const CrankyButton = (props) => {
  const reminder = () => {
    window.alert(
      "Take one dose red pill, two doses of the purple pills. Take one half of your vitamin D supplement (don't take the whole thing!)"
    );
  };
  return (
    <div>
      <button onClick={reminder} id="reminder-button">
        Reminder
      </button>
    </div>
  );
};

export default CrankyButton;
