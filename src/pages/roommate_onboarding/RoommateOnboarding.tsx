import * as React from "react";
import { Outlet, redirect } from "react-router-dom";
import PageIndicator from "./components/page-indicator/PageIndicator";
import {
    roommateDetailsContext,
    roommateErrorDetailsContext,
    schoolContext,
    userContext,
} from "utilities/contextDefinitions";
import { RoommateDetails, RoommateErrorDetails } from "utilities/typeDefs";
import { useAnimateIn, useLoadingAnimation, useUrlMessage } from "utilities/customHooks";
import { getLocalUser, getUrlParams, makeSearch } from "utilities/helperFunctions";
import { routes } from "router";
import "./roommate-onboarding.scss";

export function loader() {
    const user = getLocalUser();
    if (!user) {
        const params = { next: routes.roommate, message: "Please login to continue to find a roommate" };
        return redirect(`${routes.signIn}/${makeSearch(params)}`);
    }
    if (user.roommate_request) {
        const route = getUrlParams(window.location.search).next;
        return redirect(route ? route : routes.roommate);
    }
    return null;
}

function RoomamteOnboarding() {
    useAnimateIn();
    useLoadingAnimation();

    const { user } = React.useContext(userContext);
    const [details, setDetails] = React.useState<RoommateDetails>({
        name: user ? `${user.first_name} ${user.last_name}` : "",
        email: user ? user.email : "",
        phone: user ? user.phone : "",
        date_of_birth: user?.date_of_birth ? new Date(user.date_of_birth) : null,
        gender: "",
        state: user ? user.school?.state : "",
        university: user?.school ? user.school.id : "",
        level: "",
        department: "",
        pets: "",
        religion: "",
        smokes: "",
        drinks: "",
        hostel_price: "",
        has_existing_hostel: "",
    });
    const [errors, setErrors] = React.useState<RoommateErrorDetails>({
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
    });

    return (
        <section className="roommate-onboarding">
            <div className="page-indicator-wrapper slide-in-rest">
                <PageIndicator />
            </div>
            <div className="main-section">
                <div>
                    <h2 className="heading slide-in-rest">Request a roommate</h2>
                    <p className="sub-heading slide-in-rest">
                        Ensure to fill the required forms with the right details as any.
                    </p>
                </div>
                <PageIndicator />
                <roommateDetailsContext.Provider value={{ details, setDetails }}>
                    <roommateErrorDetailsContext.Provider value={{ errors, setErrors }}>
                        <Outlet />
                    </roommateErrorDetailsContext.Provider>
                </roommateDetailsContext.Provider>
            </div>
        </section>
    );
}

export default RoomamteOnboarding;
