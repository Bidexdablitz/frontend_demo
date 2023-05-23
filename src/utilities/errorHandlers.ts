import Axios from "axiosInstance";
import { NavigateFunction } from "react-router-dom";
import { routes } from "router";
import { errorCodes } from "./globalVariables";
import { getRefreshToken, makeSearch, refreshAccessToken } from "./helperFunctions";

export function handle401Unauthorized(
    error: any,
    signin: any,
    signout: any,
    callback: any,
    navigate?: NavigateFunction,
    preSend?: any,
    postSend?: any
) {
    switch (error.response.data.code) {
        case errorCodes.invalidToken:
            if (getRefreshToken()) {
                // invalid token but refresh token present, try to automatically login user
                refreshAccessToken(signin)
                    .then(() => {
                        // if login was successful retry the failed request
                        if (preSend) preSend();
                        Axios(error.config)
                            .then(({ data }) => {
                                callback(data);
                            })
                            .catch(() => {
                                if (postSend) postSend();
                            });
                    })
                    // couldn't log user in automatically
                    .catch(() => {
                        signout(); //signout and navigate
                    });
            } else {
                // invalid access token and no refresh token to auto login == redirect user to login manually
                const params = {
                    next: window.location.pathname,
                    message: "Your session expired, please signin to continue",
                };
                if (navigate) navigate({ pathname: routes.signIn, search: `${makeSearch(params)}` });
            }
            break;
    }
}

export function handle401UnauthorizedInLoader(error: any, callback?: any, preSend?: any, postSend?: any) {
    return new Promise((resolve, reject) => {
        switch (error.response.data.code) {
            case errorCodes.invalidToken:
                if (getRefreshToken()) {
                    // invalid token but refresh token present, try to automatically login user
                    refreshAccessToken()
                        .then(() => {
                            // if login was successful retry the failed request
                            if (preSend) preSend();
                            Axios(error.config)
                                .then(({ data }) => {
                                    if (callback) callback(data);
                                    resolve(data);
                                })
                                .catch(() => {
                                    if (postSend) postSend();
                                    reject("Token was refreshed but error occured in request rerun");
                                });
                        })
                        // couldn't log user in automatically
                        .catch(() => {
                            reject();
                        });
                } else {
                    // invalid access token and no refresh token to auto login == redirect user to login manually
                    reject();
                }
                break;
            default:
                reject();
        }
    });
}
