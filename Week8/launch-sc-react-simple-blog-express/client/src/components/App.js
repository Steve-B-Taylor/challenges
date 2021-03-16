import React from "react"
import { Route, Switch, BrowserRouter } from "react-router-dom"
import { hot } from "react-hot-loader/root"

import ArticlesList from "./ArticlesList"
import ArticleShow from "./ArticleShow"

const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        {/* Adding a <Route> here means you also need to update 
            the [clientRoutes] array in server/src/routes/clientRouter.js */}
        <Route exact path="/" component={ArticlesList} />
        {/* Add dynamic routes at the bottom of the routes */}
        <Route exact path="/articles/:id" component={ArticleShow} />
      </Switch>
    </BrowserRouter>
  )
}

export default hot(App)
