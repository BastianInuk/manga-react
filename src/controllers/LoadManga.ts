import { Manga } from "../models/Manga"

export const loadManga = (mangaSlug: string)  =>
{
    console.log("Loading manga")
    let manga: Manga
    let xhr = new XMLHttpRequest()
    xhr.open('GET', "api.manga.dk/get-manga")
    xhr.onload = () => {
        manga = Manga.fromJson(xhr.response)
        console.log("found " + manga.title)
    }
    
    xhr.onerror = () => {
        throw new Error("Couldn't find requested manga");
    }
    
    xhr.send()
        
    return manga!
}