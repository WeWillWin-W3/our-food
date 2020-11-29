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
import { RestaurantFoods } from './pages/RestaurantFoods'
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'
import { Location } from './pages/Location'
import { StoreInformation } from './pages/StoreInformation'
import { OrderFood } from './pages/OrderFood'

import { DashboardOrders } from './pages/Dashboard/Orders'
import { DashboardFoods } from './pages/Dashboard/Foods'

import APIProvider from './providers/APIProvider'

export const App = () => (
  <>
    <Router>
      <Switch>
        <APIProvider>
          <Route exact path="/dashboard">
            <DashboardOrders />
          </Route>
          <Route exact path="/dashboard/foods">
            <DashboardFoods />
          </Route>
          <Route exact path="/signin">
            <SignIn />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/signup/location">
            <Location />
          </Route>
          <Route exact path="/signup/storeinformation">
            <StoreInformation />
          </Route>
          <Route exact path="/restaurants">
            <Restaurants />
          </Route>
          <Route exact path="/restaurants/:id/foods">
            <RestaurantFoods />
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
        </APIProvider>
      </Switch>
    </Router>
    <GlobalStyle />
  </>
)

