export class Manga
{
    title: string
    cover: string
    slug: string
    constructor (title: string, 
                 cover: string,
                 slug: string)
    {
        this.title = title
        this.cover = cover
        this.slug = slug
    }

    static fromJson(json: any)
    {
            let title = json.title as string
            let cover = json.cover as string
            let slug = json.slug as string
            return new Manga (title, cover, slug)
    }
}