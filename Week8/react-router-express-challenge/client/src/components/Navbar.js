import React from "react"
import Resume from "./Resume"
import About from "./About"
import ProjectsIndex from "./ProjectsIndex"
import ProjectShow from "./ProjectShow"
import { Link, Route, Switch } from "react-router-dom"

const NavBar = (props) => {
  return (
    <div className="row column">
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/projects">Projects</Link>
      </div>
      <Switch>
        {/* Adding a <Route> here means you also need to update 
        the [clientRoutes] array in server/src/routes/clientRouter.js */}
        <Route exact path="/" component={About} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/projects" component={ProjectsIndex} />
        <Route exact path="/projects/:id" component={ProjectShow} />
      </Switch>
    </div>
  )
}

export default NavBar
