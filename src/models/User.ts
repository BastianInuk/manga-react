import { setCookie, getCookie, deleteCookie } from "../controllers/Cookies"

class User
{
    username: string

    constructor(username: string)
    {
        this.username = username
    }

    static login = (username: string, password: string) =>
    {
        setCookie("username", username)

        let xhr = new XMLHttpRequest()
        xhr.open('GET', "api.manga.dk/login")
        xhr.setRequestHeader("Authorization", "Basic " + btoa(username + ":" + password))
        xhr.onload = () => {

        }

        console.log(getCookie("username"))
    }

    logout = () =>
    {
        deleteCookie("username")
    }
}

export default User