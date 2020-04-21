import * as React from "react"

import { Link } from "react-router-dom"

export class Button
{
    text: string
    /** Action for navbar link */
    link: string

    constructor(text: string, link: string)
    {
        this.text = text 
        this.link = link
    }
}

interface NavButtons {
    buttons: Button[]
}

/** The navigation bar on the top of the page */
export const NavBar = (props: NavButtons) =>
(
    <nav>
    {  props.buttons.map( prop =>
        (
            <Link key={prop.text} to={prop.link} >{prop.text}</Link>
        )
    )} 
    </nav>
)