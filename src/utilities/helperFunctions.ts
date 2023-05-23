import Axios from "axiosInstance";
import { User } from "./typeDefs";
import { api } from "./globalVariables";

export function refreshAccessToken(signin?: any) {
    const refresh = getRefreshToken();
    return new Promise((resolve, reject) => {
        // request a new access token
        Axios.post(api.tokenRefresh, { refresh })
            .then(({ data }) => {
                if (signin) {
                    signin(data);
                } else {
                    localStorage.setItem("user", JSON.stringify(data.user));
                    localStorage.setItem("tokens", JSON.stringify(data.tokens));
                }
                resolve(data.tokens.access);
            })
            .catch((err) => {
                reject("Something went wrong generating an access token");
            });
    });
}

export function getUrlParams(url: string) {
    const obj: any = {};
    const searchString = decodeURI(url).split("?")[1];
    if (searchString) {
        const queryString = searchString.split("#")[0];
        const vars = queryString.split("&");
        vars.forEach((keyVal) => {
            const sepKeyval = keyVal.split("=");
            obj[sepKeyval[0]] = sepKeyval[1];
        });
    }
    return obj;
}

export function makeSearch(params: any) {
    let searchString = "?";
    for (let key of Object.keys(params)) {
        searchString += `${key}=${params[key]}&`;
    }
    return encodeURI(searchString);
}

export function getLocalUser(): User {
    return JSON.parse(localStorage.getItem("user") as string);
}

export function getAccessToken() {
    const accessToken = JSON.parse(localStorage.getItem("tokens") as string)?.access;
    if (accessToken) return "Bearer " + accessToken;
    else return null;
}
export function getRefreshToken() {
    return JSON.parse(localStorage.getItem("tokens") as string)?.refresh;
}

export function parseFormData(formData: FormData) {
    const obj: any = {};
    for (const [key, value] of formData.entries()) {
        obj[key] = (value as string).trim();
    }
    return obj;
}

export function extractUrlFromImgData(imagedata: ImageData) {
    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext("2d");
    canvas.width = imagedata.width;
    canvas.height = imagedata.height;
    ctx?.putImageData(imagedata, 0, 0);
    return canvas.toDataURL();
}
