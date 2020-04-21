import React from "react"

import {   
  BrowserRouter as Router,
  Switch,
  Route
//  Link 
} from "react-router-dom"

import './App.css'
import { NavBar, Button } from './components/NavBar'
import { MangaView } from "./components/MangaView"
import NotFound from "./components/404"

const navLinks: Button[] = 
[ new Button("Home", "/"),
  new Button("Profile", "/profile"),
  new Button("Random Book", "/manga/hello")
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

        <Route path="/manga/:slug" component={MangaView} />

        <Route exact path="/">
         <Home />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>

      <footer>

      </footer>
    </div>
  </Router>
)

export default App;
