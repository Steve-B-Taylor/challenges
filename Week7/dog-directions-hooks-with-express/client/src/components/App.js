import React, { useState, useEffect } from 'react'
import { hot } from "react-hot-loader/root"

import "../assets/scss/main.scss"

import DirectionsList from "./DirectionsList"
import SuppliesList from "./SuppliesList"
import FetchButton from "./FetchButton"

const App = (props) => {
  const supplies = props.data.supplies
  const directions = props.data.directions

  return (
    <>
      <h1>How To {props.data.activity}</h1>

      <SuppliesList
        supplies={supplies}
      />

      <DirectionsList
        directions={directions}
      />

      <FetchButton />
    </>
  )
}

export default hot(App)
