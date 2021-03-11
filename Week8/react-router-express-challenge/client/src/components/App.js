import React from "react"
import { hot } from "react-hot-loader/root"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import NavBar from "./NavBar"

import "../assets/scss/main.scss"

const App = (props) => {
  return (
    <BrowserRouter>
      <Route path="/" component={NavBar} />
    </BrowserRouter>
  )
}

export default hot(App)
