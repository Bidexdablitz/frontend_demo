import { createContext } from "react";
import {
    ThemeContext,
    RoommateDetailsContext,
    UserContext,
    FriendDetailsContext,
    FriendErrorDetailsContext,
    RoommateErrorDetailsContext,
    School,
} from "./typeDefs";

export const themeContext = createContext<ThemeContext>({ theme: "", setTheme: () => {} });
export const roommateDetailsContext = createContext<RoommateDetailsContext>({
    details: {
        name: "",
        email: "",
        phone: "",
        date_of_birth: null,
        gender: "",
        state: "",
        university: "",
        level: "",
        department: "",
        pets: "",
        religion: "",
        smokes: false,
        drinks: false,
        hostel_price: "",
        has_existing_hostel: "",
    },
    setDetails: () => {},
});

export const roommateErrorDetailsContext = createContext<RoommateErrorDetailsContext>({
    errors: {
        name: { error: false, message: "" },
        email: { error: false, message: "" },
        phone: { error: false, message: "" },
        date_of_birth: { error: false, message: "" },
        gender: { error: false, message: "" },
        state: { error: false, message: "" },
        university: { error: false, message: "" },
        level: { error: false, message: "" },
        department: { error: false, message: "" },
        pets: { error: false, message: "" },
        religion: { error: false, message: "" },
        smokes: { error: false, message: "" },
        drinks: { error: false, message: "" },
        hostel_price: { error: false, message: "" },
        has_existing_hostel: { error: false, message: "" },
    },
    setErrors: () => {},
});

// friend

export const friendDetailsContext = createContext<FriendDetailsContext>({
    details: {
        name: "",
        email: "",
        phone: "",
        dob: null,
        gender: "",
        "seeking gender": "",
        state: "",
        university: "",
        "seeking state": "",
        "seeking university": "",
    },
    setDetails: () => {},
});

export const friendErrorDetailsContext = createContext<FriendErrorDetailsContext>({
    errors: {
        name: { error: false, message: "" },
        email: { error: false, message: "" },
        phone: { error: false, message: "" },
        dob: { error: false, message: "" },
        gender: { error: false, message: "" },
        "seeking gender": { error: false, message: "" },
        state: { error: false, message: "" },
        university: { error: false, message: "" },
        "seeking state": { error: false, message: "" },
        "seeking university": { error: false, message: "" },
    },
    setErrors: () => {},
});

export const userContext = createContext<UserContext>({ user: null, setUser: null });

export const schoolContext = createContext<School[]>([]);
