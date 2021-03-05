import React from "react"

const DirectionTile = (props) => {
  return (
    <li onClick={props.handleClick} className={props.className}>
      {props.step}
    </li>
  )
}

export default DirectionTile
