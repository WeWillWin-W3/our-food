import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { GlobalStyle } from './styles/GlobalStyle'
import { Home } from './pages/Home'
import { SignIn } from './pages/SignIn'

export const App = () => (
  <>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/SignIn">
          <SignIn />
        </Route>
      </Switch>
    </Router>
    <GlobalStyle />
  </>
)

