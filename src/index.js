import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Home2 from './views/home2'
import Home1 from './views/home1'
import Home from './views/home'
import NotFound2 from './views/not-found2'
import Home3 from './views/home3'
import NotFound1 from './views/not-found1'
import NotFound3 from './views/not-found3'
import NotFound4, { NotFound } from './views/not-found'
import NotFound41 from './views/not-found4'
import Home4 from './views/home4'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Home2} exact path="/home2" />
        <Route component={Home1} exact path="/home1" />
        <Route component={Home} exact path="/" />
        <Route component={NotFound2} exact path="/not-found2" />
        <Route component={Home3} exact path="/home3" />
        <Route component={NotFound1} exact path="/not-found1" />
        <Route component={NotFound3} exact path="/not-found3" />
        <Route component={NotFound4} exact path="/not-found" />
        <Route component={NotFound41} exact path="/not-found4" />
        <Route component={Home4} exact path="/home4" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
