import * as React from "react";
import { Link } from "react-router-dom";
import { validateInput } from "utilities/handleFormSubmit";
import { useAnimateIn, useFriendSelect } from "utilities/customHooks";
import { routes } from "router";
import "pages/roommate_onboarding/components/page_one/page-one.scss";
import { roommateDetailsContext, roommateErrorDetailsContext } from "utilities/contextDefinitions";

function PageTwo() {
    useAnimateIn(".slide-in-rest", { threshold: 0.7 });
    const { details, setDetails } = React.useContext(roommateDetailsContext);
    const { errors, setErrors } = React.useContext(roommateErrorDetailsContext);

    const genderSelect = useFriendSelect("gender", [
        { value: "m", userString: "Male" },
        { value: "f", userString: "Female" },
    ]);
    const seekingGenderSelect = useFriendSelect("seeking gender", [
        { value: "m", userString: "Male" },
        { value: "f", userString: "Female" },
    ]);
    return (
        <div className="page-two">
            {genderSelect}
            {seekingGenderSelect}

            <div className="navigation-buttons slide-in-rest">
                <Link to={routes.friendOnboarding.index} replace={true} className="back">
                    back
                </Link>
                <Link to={routes.friendOnboarding.pageThree} replace={true} className="next">
                    next
                </Link>
            </div>
        </div>
    );
}

export default PageTwo;
