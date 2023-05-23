export type ThemeContext = {
    theme: string;
    setTheme: (theme: string) => void;
};

export type RoommateDetailsContext = {
    details: RoommateDetails;
    setDetails: (details: RoommateDetails | ((details: RoommateDetails) => any)) => void;
};

export type RoommateDetails = {
    name: string;
    email: string;
    phone: string;
    date_of_birth: Date | null;
    gender: string;
    state: string;
    university: string;
    level: string;
    department: string;
    pets: string;
    religion: string;
    smokes: boolean | string;
    drinks: boolean | string;
    hostel_price: string;
    has_existing_hostel: string;
};

export type RoommateErrorDetailsContext = {
    errors: RoommateErrorDetails;
    setErrors: (errors: RoommateErrorDetails | ((errors: RoommateErrorDetails) => any)) => void;
};

export type RoommateErrorDetails = {
    name: { error: boolean; message: string };
    email: { error: boolean; message: string };
    phone: { error: boolean; message: string };
    date_of_birth: { error: boolean; message: string };
    gender: { error: boolean; message: string };
    state: { error: boolean; message: string };
    university: { error: boolean; message: string };
    level: { error: boolean; message: string };
    department: { error: boolean; message: string };
    pets: { error: boolean; message: string };
    religion: { error: boolean; message: string };
    smokes: { error: boolean; message: string };
    drinks: { error: boolean; message: string };
    hostel_price: { error: boolean; message: string };
    has_existing_hostel: { error: boolean; message: string };
};

export type FriendDetailsContext = {
    details: FriendDetails;
    setDetails: (details: FriendDetails | ((details: FriendDetails) => any)) => void;
};

export type FriendDetails = {
    name: string;
    email: string;
    phone: string;
    dob: Date | null;
    gender: string;
    "seeking gender": string;
    state: string;
    university: string;
    "seeking state": string;
    "seeking university": string;
};

export type FriendErrorDetailsContext = {
    errors: FriendErrorDetails;
    setErrors: (errors: FriendErrorDetails | ((errors: FriendErrorDetails) => any)) => void;
};

export type FriendErrorDetails = {
    name: { error: boolean; message: string };
    email: { error: boolean; message: string };
    phone: { error: boolean; message: string };
    dob: { error: boolean; message: string };
    gender: { error: boolean; message: string };
    "seeking gender": { error: boolean; message: string };
    state: { error: boolean; message: string };
    university: { error: boolean; message: string };
    "seeking state": { error: boolean; message: string };
    "seeking university": { error: boolean; message: string };
};

export type User = {
    username: string;
    email: string;
    first_name: string;
    last_name: string;
    age: string;
    phone: string;
    date_of_birth: string;
    school: School;
    level: string;
    department: string;
    religion: string;
    roommate_request: {
        smokes: string;
        drinks: string;
        pets: string[];
        active: string;
        hostel_price: string;
    } | null;
    pictures: Picture[];
};
export type UserContext = {
    user: User | null;
    setUser: any;
};

export type School = {
    id: string;
    name: string;
    state: string;
    abbreviation: string;
};

export type Picture = {
    image: string;
    blurhash: string;
};
