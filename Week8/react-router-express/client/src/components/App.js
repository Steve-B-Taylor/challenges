import React from 'react'
import { hot } from "react-hot-loader/root"

import "../assets/scss/main.scss"

import CerealsIndexPage from "./CerealsIndexPage"

const App = props => {
  return (
    <div>
      <CerealsIndexPage />
    </div>
  )
}

export default hot(App)
