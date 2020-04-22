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
import { ProfileBar } from "./components/Profile"

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
      <header>
        <NavBar buttons={navLinks} />
      </header>

      <ProfileBar />

      <div className="body">
        <Switch>
          <Route path="/profile" component={Profile} />

          <Route path="/manga/:slug" component={MangaView} />

          <Route exact path="/" component={Home} />
          
          <Route path="*" component={NotFound} />
        </Switch>
      </div>

      <footer>
        <p>Manga.dk is © Inuk Entertainment 2020</p>
      </footer>
  </Router>
)

export default App;
