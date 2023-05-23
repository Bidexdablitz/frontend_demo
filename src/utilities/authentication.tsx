import Axios from "axiosInstance";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "router";
import { User } from "./typeDefs";
import { userContext } from "./contextDefinitions";
import { AlertMessage } from "./customHooks";
import { api } from "./globalVariables";

export async function exchange_token(accessToken: string, backend: string) {
    AlertMessage("Please wait while we try to sign you in");
    const res = await Axios.post(`${api.exchangeToken}/${backend}`, { access_token: accessToken });
    return res.data;
}

export function useSignInUser() {
    const { setUser } = useContext(userContext);
    return (data: { user: User; tokens: { access: string; refresh: string } }) => {
        const { user, tokens } = data;
        if (!user || !tokens) return;
        if (setUser) setUser(user);
        localStorage.setItem("tokens", JSON.stringify(tokens));
        AlertMessage(`You are successfully signed-in as ${user.username}`);
    };
}

export function useSignOutUser() {
    const { setUser } = useContext(userContext);
    const navigate = useNavigate();

    return (redirect = true, alertUser = true) => {
        if (setUser) setUser(null);
        localStorage.removeItem("tokens");
        if (alertUser) AlertMessage(`You have been signed-out`);
        if (redirect) navigate(routes.index);
    };
}
