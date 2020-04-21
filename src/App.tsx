import React from "react"

import {   
  BrowserRouter as Router,
  Switch,
  Route
//  Link 
} from "react-router-dom"

import './App.css'
import { NavBar, Button } from './components/NavBar'

const navLinks: Button[] = 
[ new Button("Home", "/"),
  new Button("Profile", "/profile")
]

const Home = () =>
(
  <p>Home</p>
)

const Profile = () =>
(
  <p>Hello user!</p>
)

const App = () =>
(
  <Router>
    <div>
      <header>
        <NavBar buttons={navLinks} />
      </header>

      <Switch>
        <Route path="/profile">
          <Profile />
        </Route>

        <Route exact path="/">
         <Home />
        </Route>
      </Switch>

      <footer>

      </footer>
    </div>
  </Router>
)

export default App;
