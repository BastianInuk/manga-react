import * as React from "react"
import { Link } from "react-router-dom"

import { Manga } from "../models/Manga"

export const MangaCard = (manga: Manga) =>
(
    <Link to={ "/manga/" + manga.slug }>
        <image href={manga.cover} />
        <p>{manga.title}</p>
    </Link>
)