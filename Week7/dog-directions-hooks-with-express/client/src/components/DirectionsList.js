import React, { useState, useEffect } from 'react'

import DirectionTile from "./DirectionTile"

const DirectionsList = (props) => {
  const directionTiles = props.directions.map(direction => {

    // const setSelectedDirectionClosure = () => {
      //   setter function with id of direction as an argument
      //   e.g. setSelectedDirection(direction.id)
      // }
    return (
      <DirectionTile
        step={direction.step}
        key={direction.id}
        id={direction.id}
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
