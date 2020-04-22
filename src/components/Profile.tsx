import React from "react"

import { loginHandler } from "../controllers/LoginHandler"

let username: string = ""
const setUsername = (usernameParam: string) => {
    username = usernameParam
}

let password: string = ""
const setPassword = (passwordParam: string) => {
    password = passwordParam
}

const login = () =>
{
    loginHandler(username, password)
}

export const ProfileBar = () =>
(
    <nav className="ProfileBar">
       <form onSubmit={login}>
            <label>
                <p>Username:</p>
                <input type="text" 
                       name="username" 
                       onChange={(e) => 
                           setUsername(e.target.value)
                       } />
            </label>
            <br />
            <label>
                <p>Password:</p>
                <input type="password" 
                       name="password" 
                       onChange={e => {
                           console.log("Setting password")
                           setPassword(e.target.value)
                       }} />
            </label>
            <br />
            <input type="submit" value="Login" />
        </form> 
    </nav>
)