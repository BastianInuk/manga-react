import { setCookie, getCookie, deleteCookie } from "./Cookies"

export const loginHandler = (username: string, password: string) =>
{
    setCookie("username", username)

    let xhr = new XMLHttpRequest()
    xhr.open('GET', "api.manga.dk/login")
    xhr.setRequestHeader("Authorization", "Basic " + btoa(username + ":" + password))
    xhr.onload = () => {

    }

    console.log(getCookie("username"))

    deleteCookie("username")

}