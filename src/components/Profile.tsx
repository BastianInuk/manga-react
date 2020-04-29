import React from "react"

import { loginHandler } from "../controllers/LoginHandler"
import { getCookie } from "../controllers/Cookies"

let username: string = ""
const setUsername = (usernameParam: string) => {
    username = usernameParam
}

let password: string = ""
const setPassword = (passwordParam: string) => {
    password = passwordParam
}

const login = (event: React.FormEvent<HTMLFormElement>) =>
{
    console.log("Logging in")
    loginHandler(username, password)

    // Prevents ugly stuff from happening in the url bar
    event.preventDefault()
}

interface LoggedInProtection {
    loggedIn: () => JSX.Element
    notLoggedIn?: () => JSX.Element
}

const empty = () => (<div></div>)

export const LoggedIn = (params: LoggedInProtection) => {
    let user = getCookie("username")

    let callback: () => JSX.Element    
    if (user !== undefined)
    {
        callback = params.loggedIn
    } else {
        callback = params.notLoggedIn ?? empty
    }
    return callback()

}

const UserPanel = () => (
    <div></div>
)

const LoginForm = () => 
(
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
)

export const ProfileBar = () =>
(
    <nav className="ProfileBar">
        <LoggedIn notLoggedIn={LoginForm} loggedIn={UserPanel} />
    </nav>
)