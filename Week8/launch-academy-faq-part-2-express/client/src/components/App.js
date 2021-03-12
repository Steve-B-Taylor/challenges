import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { hot } from "react-hot-loader/root"

import FAQList from "./FAQList"
import LauncherList from "./LauncherList"
import LauncherShow from "./LauncherShow"

const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        {/* Adding a <Route> here means you also need to update 
        the [clientRoutes] array in server/src/routes/clientRouter.js */}
        <Route exact path="/" component={FAQList} />
        <Route exact path="/launchers" component={LauncherList} />
        <Route exact path="/launchers/:id" component={LauncherShow} />
      </Switch>
    </BrowserRouter>
  )
}

export default hot(App)
