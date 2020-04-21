import React from "react"
import { RouteComponentProps } from "react-router-dom"

import { loadManga } from "../controllers/LoadManga"
import NotFound from "./404"

type TParams = { slug: string }

export const MangaView = ({ match }: RouteComponentProps<TParams>) => 
{ 
    try {
        let manga = loadManga(match.params.slug)
        return(
            <p>
                { manga.title }
            </p>
        )
    } catch (e) {
        console.log(e)
        return <NotFound manga />
    }
}
