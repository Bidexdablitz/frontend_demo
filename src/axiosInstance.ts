import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { AlertMessage, animateLoading } from "utilities/customHooks";
import { getAccessToken } from "utilities/helperFunctions";

const Axios = axios.create({ baseURL: "/api" });
export const AxiosUnprotected = axios.create({ baseURL: "/api" });

Axios.interceptors.request.use(requestSuccess(), requestError);
Axios.interceptors.response.use(responseSuccess, responseError);
AxiosUnprotected.interceptors.request.use(requestSuccess(false), requestError);
AxiosUnprotected.interceptors.response.use(responseSuccess, responseError);

function requestSuccess(includeAuthHeader = true) {
    return (config: InternalAxiosRequestConfig<any>) => {
        // Do something before request is sent
        animateLoading(true);
        if (includeAuthHeader) {
            config.headers.Authorization = getAccessToken(); // modify the authorization token per request
        }
        return config;
    };
}

function requestError(error: any) {
    // Do something with request error

    animateLoading(false);
    return Promise.reject(error);
}

function responseSuccess(response: AxiosResponse<any, any>) {
    // Do something before response is returned
    animateLoading(false);
    console.log(response);

    return response;
}

function responseError(error: any) {
    // Do something with response error
    animateLoading(false); // stop loading bar

    console.error(error);
    if (error.response) {
        switch (error.response.status) {
            case 500:
                AlertMessage("Oops something went wrong.");
                break;
            default:
                let message = Object.values(error.response.data)[0];
                if (Array.isArray(message)) message = message[0];
                AlertMessage(message as string);
        }
    } else {
        AlertMessage(error.message);
    }
    return Promise.reject(error);
}

export default Axios;
