import React, { useState, useEffect } from "react"

import DirectionTile from "./DirectionTile"

const DirectionsList = (props) => {
  const [selectedId, setSelectedId] = useState(null)

  const directionTiles = props.directions.map((direction) => {
    let className
    if (selectedId === direction.id) {
      className = " selected"
    }
    const setSelectedDirectionClosure = () => {
      //   setter function with id of direction as an argument
      setSelectedId(direction.id)
    }
    return (
      <DirectionTile
        step={direction.step}
        key={direction.id}
        id={direction.id}
        className={className}
        handleClick={setSelectedDirectionClosure}
      />
    )
  })

  return (
    <div>
      <h3>Directions:</h3>
      <ol>{directionTiles}</ol>
    </div>
  )
}

export default DirectionsList
