import React from 'react'
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { GlobalStyle } from './styles/GlobalStyle'

import { Home } from './pages/Home'
import { Checkout } from './pages/Checkout'
import { Restaurants } from './pages/Restaurants'
import { Pedidos } from './pages/Pedidos'
import { SignIn } from './pages/SignIn'

export const App = () => (
  <>
    <Router>
      <Switch>
        <Route exact path="/pedidos">
          <Pedidos />
        </Route>
        <Route exact path="/signin">
          <SignIn />
        </Route>
        <Route exact path="/restaurants">
          <Restaurants />
        </Route>
        <Route exact path="/checkout">
          <Checkout />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
    <GlobalStyle />
  </>
)

