import React, { useState, useEffect } from "react"
import { hot } from "react-hot-loader/root"

import "../assets/scss/main.scss"

import DirectionsList from "./DirectionsList"
import SuppliesList from "./SuppliesList"
import FetchButton from "./FetchButton"

const fetchData = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/v1/favorite-things")
    if (!response.ok) {
      const errorMessage = `${response.status} (${response.statusText})`
      const error = new Error(errorMessage)
      throw error
    }
    const responseBody = await response.json()
    return responseBody
    return rActivity
  } catch (err) {
    console.error("Error in fetch!")
    console.error(err)
  }
}

const App = (props) => {
  const fetchObj = fetchData()
  console.log(fetchObj)

  const supplies = props.data.supplies
  const directions = props.data.directions

  return (
    <>
      <h1>How To {props.data.activity}</h1>

      <SuppliesList supplies={supplies} />

      <DirectionsList directions={directions} />

      <FetchButton />
    </>
  )
}

export default hot(App)
