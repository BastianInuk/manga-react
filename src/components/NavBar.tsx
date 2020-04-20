import * as React from "react"

export class Button
{
    text: string
    /** Action for navbar link */
    onClick: () => void

    constructor(text: string, onClick: () => void)
    {
        this.text = text 
        this.onClick = onClick
    }
}

interface NavButtons {
    buttons: Button[]
}

const LinkButton = (prop: Button) =>
(
    <button onClick={prop.onClick}>{prop.text}</button>
)

/** The navigation bar on the top of the page */
export const NavBar = (props: NavButtons) => 
(
    <nav>
       { 
        props.buttons.map( prop =>
            { return(
                <LinkButton key={prop.text} onClick={prop.onClick} text={prop.text} />
            )}
        )
       } 
    </nav>
)