import React, { Fragment } from "react";
import Icon from "./Icon";

const IconReferenceList = (props) => {
  const iconInfo = [
    {
      key: "1",
      iconName: "Article",
      fontAwesomeSymbol: "fa-file-text-o",
      description: "Article Description",
    },
    {
      key: "2",
      iconName: "Exercise",
      fontAwesomeSymbol: "fa-heartbeat",
      description: "Exercise Description",
    },
    {
      key: "3",
      iconName: "Challenge",
      fontAwesomeSymbol: "fa-puzzle-piece",
      description: "Challenge Description",
    },
  ];

  let icons = iconInfo.map((icon) => {
    return (
      <Fragment key={icon.key}>
        <Icon
          iconName={icon.iconName}
          fontAwesomeSymbol={icon.fontAwesomeSymbol}
          description={icon.description}
        />
        <p>{icon.description}</p>
      </Fragment>
    );
  });

  return <ul>{icons}</ul>;
};

export default IconReferenceList;
