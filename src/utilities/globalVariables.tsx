export const paystackPublicKey = "pk_live_b3d9e7f52f6d0d64e2155929cc51332d703ed832";

export const themes = {
    dark: "dark-theme",
    light: "light-theme",
};

export const breakPoints = {
    extraSmall: 400,
    mobile: 600,
    highest: 1400,
};
export const sprinklesAmount = 50;

export const links = {
    twitter: "",
    instagram: "",
    whatsapp: "",
    telegram: "",
    facebook: "",
};
export const socialBackends = {
    google: "google-oauth2",
};
export const api = {
    exchangeToken: "/social",
    signUp: "/sign-up",
    login: "/login",
    schools: "/schools",
    tokenRefresh: "token/refresh",
    roommate: "/roommate",
    friend: "/friend",
    uploadImage: "/upload/image",
    resetPassword: {
        reset: "/reset-password/",
        validateToken: "/reset-password/validate_token/",
        confirm: "/reset-password/confirm/",
    },
    paystack: {
        varify_transaction: "/paystack/transaction/verify/?transaction_ref=",
    },
};

export const errorCodes = {
    invalidToken: "token_not_valid",
    requestCanceled: "ERR_CANCELED",
};
export const minRoommateAge = 15;
export const maxRoommateAge = 30;
export const maxDate = new Date(new Date().setFullYear(new Date().getFullYear() - minRoommateAge));
export const minDate = new Date(new Date().setFullYear(new Date().getFullYear() - maxRoommateAge));

export const nairaUnicode = "\u20a6";
export const options = {
    gender: [
        { value: "male", userString: "male" },
        { value: "female", userString: "female" },
    ],
    level: [
        { value: "100", userString: "100 Level" },
        { value: "200", userString: "200 Level" },
        { value: "300", userString: "300 Level" },
        { value: "400", userString: "400 Level" },
        { value: "500", userString: "500 Level" },
        { value: "600", userString: "600 Level" },
    ],
    religion: [
        { value: "christian", userString: "christianity" },
        { value: "muslim", userString: "islam" },
        { value: "traditional", userString: "traditional religion" },
    ],
    hostelPrice: [
        {
            value: `${nairaUnicode}70,000 - ${nairaUnicode}100,000`,
            userString: `${nairaUnicode}70,000 - ${nairaUnicode}100,000`,
        },
        {
            value: `${nairaUnicode}100,001 - ${nairaUnicode}150,000`,
            userString: `${nairaUnicode}100,001 - ${nairaUnicode}150,000`,
        },
        {
            value: `${nairaUnicode}150,000 above`,
            userString: `${nairaUnicode}150,000 above`,
        },
    ],
    hasExistingHostel: [
        { value: true, userString: "i already have a hostel" },
        { value: false, userString: "I am looking to move into a new hostel" },
    ],
    bool: [
        { value: true, userString: "Yes" },
        { value: false, userString: "No" },
    ],
};

export const optionalFields = ["pets"];

export const DEMO = true;
