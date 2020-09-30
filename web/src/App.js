import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { GlobalStyle } from './styles/GlobalStyle'
import { Home } from './pages/Home'
import { Restaurants } from './pages/Restaurants'

export const App = () => (
  <>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/restaurants">
          <Restaurants />
        </Route>
      </Switch>
    </Router>
    <GlobalStyle />
  </>
)

