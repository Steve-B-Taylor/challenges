import React from "react"
import Greeting from "./Greeting"
import Goodbye from "./Goodbye"
import CustomGreeting from "./CustomGreeting"
import { Link, Route, Switch } from "react-router-dom"

const NavBar = (props) => {
  return (
    <div className="row column">
      <div className="navbar">
        <Link to="/">Home</Link>
      </div>
      <div className="navbar">
        <Link to="/Goodbye">Say Goodbye</Link>
      </div>
      <div className="navbar">
        <Link to="/CustomGreeting">Get a custom greeting</Link>
      </div>
      <Switch>
        {/* Adding a <Route> here means you also need to update 
        the [clientRoutes] array in server/src/routes/clientRouter.js */}
        <Route exact path="/" component={Greeting} />
        <Route exact path="/Goodbye" component={Goodbye} />
        <Route exact path="/CustomGreeting" component={CustomGreeting} />
      </Switch>
      {/* <Route path="/" component={NavBar} /> */}
    </div>
  )
}

export default NavBar
