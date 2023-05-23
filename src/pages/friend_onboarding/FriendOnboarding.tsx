import * as React from "react";
import { Outlet } from "react-router-dom";
import PageIndicator from "./components/page-indicator/PageIndicator";
import "pages/roommate_onboarding/roommate-onboarding.scss";
import { friendDetailsContext, friendErrorDetailsContext } from "utilities/contextDefinitions";
import { useLoadingAnimation } from "utilities/customHooks";
import { FriendDetails, FriendErrorDetails } from "utilities/typeDefs";

function FriendOnboarding() {
    useLoadingAnimation();

    const [details, setDetails] = React.useState<FriendDetails>({
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
    });
    const [errors, setErrors] = React.useState<FriendErrorDetails>({
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
    });

    return (
        <section className="roommate-onboarding">
            <div className="page-indicator-wrapper slide-in-rest">
                <PageIndicator />
            </div>
            <div className="main-section">
                <div className="div">
                    <h2 className="heading slide-in-rest">Request a friend</h2>
                    <p className="sub-heading slide-in-rest">
                        Ensure to fill the required forms with the right details as any.
                    </p>
                </div>
                <PageIndicator />
                <friendDetailsContext.Provider value={{ details, setDetails }}>
                    <friendErrorDetailsContext.Provider value={{ errors, setErrors }}>
                        <Outlet />
                    </friendErrorDetailsContext.Provider>
                </friendDetailsContext.Provider>
            </div>
        </section>
    );
}

export default FriendOnboarding;
