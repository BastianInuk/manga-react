export const loginHandler = (username: string, password: string) =>
{
    console.log(username)

    let xhr = new XMLHttpRequest()
    xhr.open('GET', "api.manga.dk/login")

    xhr.onload = () => {

    }

}