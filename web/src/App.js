import React from 'react'
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { GlobalStyle } from './styles/GlobalStyle'

import { Home } from './pages/Home'
import { Restaurants } from './pages/Restaurants'
import { Pedidos } from './pages/Pedidos'
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'
import { Location } from './pages/Location'
import { StoreInformation } from './pages/StoreInformation';


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
        <Route exact path="/">
          <Location />
        </Route>
      </Switch>
    </Router>
    <GlobalStyle />
  </>
)

