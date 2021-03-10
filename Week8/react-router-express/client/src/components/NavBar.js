import React from "react"
import { Switch, Route, Link } from "react-router-dom"
import CerealsIndexPage from "./CerealsIndexPage"
import CerealShowPage from "./CerealShowPage"
import MilksIndexPage from "./MilksIndexPage"

const NavBar = (props) => {
  return (
    <div className="row column">
      <div className="navbar">
        <Link to="/">All Cereals</Link>
      </div>
      <div className="navbar">
        <Link to="/milks">All Milks</Link>
      </div>
      <div className="content">
        <h1 className="page-title">Cereals</h1>
      </div>
      <Switch>
        {/* Adding a <Route> here means you also need to update 
        the [clientRoutes] array in server/src/routes/clientRouter.js */}
        <Route exact path="/" component={CerealsIndexPage} />
        <Route exact path="/cereals/:id" component={CerealShowPage} />
        <Route exact path="/milks" component={MilksIndexPage} />
      </Switch>
      <div className="navbar">
        <p>I am a footer!</p>
      </div>
    </div>
  )
}

export default NavBar
