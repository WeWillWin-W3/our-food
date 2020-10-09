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
import { RestaurantDashboard } from './pages/RestaurantDashboard'
import { SignIn } from './pages/SignIn'
import { OrderFood } from './pages/OrderFood' 

export const App = () => (
  <>
    <Router>
      <Switch>
        <Route exact path="/dashboard">
          <RestaurantDashboard />
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
        <Route exact path="/order">
          <OrderFood />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
    <GlobalStyle />
  </>
)

