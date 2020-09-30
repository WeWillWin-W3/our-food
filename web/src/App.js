import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { GlobalStyle } from './styles/GlobalStyle'
import { Home } from './pages/Home'
import { Pedidos } from './pages/Pedidos'

export const App = () => (
  <>
    <Router>
      <Switch>
        <Route exact path="/pedidos">
          <Pedidos />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
    <GlobalStyle />
  </>
)

