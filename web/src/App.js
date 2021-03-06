import React from 'react'
import {
  HashRouter as Router,
  Switch,
  Route, Redirect
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
import { DashboardFindFood } from './pages/Dashboard/Foods/FindFood'
import { DashboardCreateFood } from './pages/Dashboard/Foods/CreateFood'
import { DashboardEditFood } from './pages/Dashboard/Foods/EditFood'

import APIProvider from './providers/APIProvider'

import { userRole } from './constants'
const { RESTAURANT_OWNER_ROLE } = userRole

export const App = () => (
  <>
    <Router>
      <Switch>
        <APIProvider>
          <Route exact path="/signup/location">
            <Location />
          </Route>
          <APIProvider.Consumer>
            {
              api => (
                <>
                  <PrivateRoute
                    exact
                    path="/dashboard"
                    redirectTo="/signin"
                    redirectIf={!api.user || api.user?.role !== RESTAURANT_OWNER_ROLE}
                  >
                    <DashboardOrders />
                  </PrivateRoute>

                  <PrivateRoute
                    exact
                    path="/dashboard/foods"
                    redirectTo="/signin"
                    redirectIf={!api.user || api.user?.role !== RESTAURANT_OWNER_ROLE}
                  >
                    <DashboardFindFood />
                  </PrivateRoute>

                  <PrivateRoute
                    exact
                    path="/dashboard/foods/create"
                    redirectTo="/signin"
                    redirectIf={!api.user || api.user?.role !== RESTAURANT_OWNER_ROLE}
                  >
                    <DashboardCreateFood />
                  </PrivateRoute>

                  <PrivateRoute
                    exact
                    path="/dashboard/foods/edit/:id"
                    redirectTo="/signin"
                    redirectIf={!api.user || api.user?.role !== RESTAURANT_OWNER_ROLE}
                  >
                    <DashboardEditFood />
                  </PrivateRoute>

                  <PrivateRoute
                    exact
                    path="/signin"
                    redirectTo="/"
                    redirectIf={!!api.user}
                  >
                    <SignIn />
                  </PrivateRoute>

                  <PrivateRoute
                    exact
                    path="/signup"
                    redirectTo="/"
                    redirectIf={!!api.user}
                  >
                    <SignUp />
                  </PrivateRoute>

                  <PrivateRoute
                    exact
                    path="/signup/storeinformation"
                    redirectTo="/signup"
                    redirectIf={!api.user || api.user?.role !== RESTAURANT_OWNER_ROLE}
                  >
                    <StoreInformation />
                  </PrivateRoute>
                </>
              )
            }
          </APIProvider.Consumer>
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

const PrivateRoute = ({
  children,
  redirectTo = "/signin",
  redirectIf = true,
  ...rest
}) => (
    <Route
      {...rest}>
      {redirectIf ? <Redirect to={redirectTo} /> : children}
    </Route>
  )