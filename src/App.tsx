import React from "react"

import './App.css'
import { NavBar, Button } from './components/NavBar'

const navLinks: Button[] = 
[ new Button("Home", () => {
    console.log("Home pressed");
  }),
  new Button("Profile", () => {
    console.log("Profile pressed")
  })
]

const App = () =>
(
  <div>
    <header>
      <NavBar buttons={navLinks} />
    </header>
  </div>
)

export default App;
