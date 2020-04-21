import React from "react"

type options = {
    manga?: boolean
}

const NotFound = (prop: options) =>
(
    <p>The {prop.manga? "manga" : "page"} you have requested does not exist.</p>
)

export default NotFound