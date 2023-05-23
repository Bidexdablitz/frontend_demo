import * as React from "react";
import { Link } from "react-router-dom";
import { useHandleFormSubmit, validateInput } from "utilities/handleFormSubmit";
import { routes } from "router";
import { useAnimateIn, useFriendSelect } from "utilities/customHooks";
import "pages/roommate_onboarding/components/page_one/page-one.scss";
import { friendDetailsContext, friendErrorDetailsContext } from "utilities/contextDefinitions";

function PageThree() {
    const handleFormSubmit = useHandleFormSubmit(() => "");
    useAnimateIn(".slide-in-rest", { threshold: 0.7 });
    const { details, setDetails } = React.useContext(friendDetailsContext);
    const { errors, setErrors } = React.useContext(friendErrorDetailsContext);
    const stateSelect = useFriendSelect("state", [
        { value: "m", userString: "Male" },
        { value: "f", userString: "Female" },
    ]);
    const seekingStateSelect = useFriendSelect("seeking state", [
        { value: "m", userString: "Male" },
        { value: "f", userString: "Female" },
    ]);
    const universitySelect = useFriendSelect("university", [
        { value: "m", userString: "Male" },
        { value: "f", userString: "Female" },
    ]);
    const seekingUniversitySelect = useFriendSelect("seeking university", [
        { value: "m", userString: "Male" },
        { value: "f", userString: "Female" },
    ]);
    return (
        <div className="page-three">
            {stateSelect}
            {universitySelect}
            {seekingStateSelect}
            {seekingUniversitySelect}

            <div className="navigation-buttons slide-in-rest">
                <Link to={routes.friendOnboarding.pageTwo} replace={true} className="back">
                    back
                </Link>
                <button type="button" className="next" onClick={(e) => handleFormSubmit(e)}>
                    submit
                </button>
            </div>
        </div>
    );
}

export default PageThree;
