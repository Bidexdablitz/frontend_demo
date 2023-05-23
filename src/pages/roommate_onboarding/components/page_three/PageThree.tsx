import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useHandleFormSubmit, validateInput } from "utilities/handleFormSubmit";
import { routes } from "router";
import { useAnimateIn, useRoommateSelect } from "utilities/customHooks";
import {
    roommateDetailsContext,
    roommateErrorDetailsContext,
    userContext,
} from "utilities/contextDefinitions";
import { api, options } from "utilities/globalVariables";
import { User } from "utilities/typeDefs";
import { getUrlParams } from "utilities/helperFunctions";

function PageThree() {
    useAnimateIn(".slide-in-rest", { threshold: 0.7 });
    const { details } = React.useContext(roommateDetailsContext);
    const { errors, setErrors } = React.useContext(roommateErrorDetailsContext);
    const { user, setUser } = React.useContext(userContext);
    const navigate = useNavigate();
    const handleFormSubmit = useHandleFormSubmit(
        (data: User) => {
            setUser(data);
        },
        details,
        errors,
        setErrors,
        routes.roommateOnboarding.index
    );
    React.useEffect(() => {
        // redirect user if user has successfully created roommate request user state has been updateds
        if (user?.roommate_request) {
            const route = getUrlParams(window.location.search).next;
            navigate(route ? route : routes.roommate, { replace: true });
        }
    }, [user]);
    const religionSelect = useRoommateSelect("religion", options.religion);
    const smokeSelect = useRoommateSelect("smokes", options.bool, "do you smoke? ");
    const alcoholSelect = useRoommateSelect("drinks", options.bool, "do you drink alcohol?");
    const hostelPriceSelect = useRoommateSelect(
        "hostel_price",
        options.hostelPrice,
        "How much should the hostel cost"
    );
    const haveHostelSelect = useRoommateSelect(
        "has_existing_hostel",
        options.hasExistingHostel,
        "Do you have an existing hostel"
    );
    return (
        <form action={api.roommate} onSubmit={handleFormSubmit}>
            <div className="page-three">
                {religionSelect}
                {smokeSelect}
                {alcoholSelect}
                {hostelPriceSelect}
                {haveHostelSelect}

                <div className="navigation-buttons slide-in-rest">
                    <Link to={routes.roommateOnboarding.pageTwo} replace={true} className="back">
                        back
                    </Link>
                    <button type="submit" className="next">
                        submit
                    </button>
                </div>
            </div>
        </form>
    );
}

export default PageThree;
