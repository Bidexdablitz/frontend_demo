import * as React from "react";
import { Link } from "react-router-dom";
import { validateInput } from "utilities/handleFormSubmit";
import { useAnimateIn, useRoommateSelect, useStateSchools } from "utilities/customHooks";
import { routes } from "router";
import { roommateDetailsContext, roommateErrorDetailsContext } from "utilities/contextDefinitions";
import { options } from "utilities/globalVariables";

function PageTwo() {
    useAnimateIn(".slide-in-rest", { threshold: 0.7 });
    const { details, setDetails } = React.useContext(roommateDetailsContext);
    const { errors, setErrors } = React.useContext(roommateErrorDetailsContext);
    const { states, schools } = useStateSchools();
    const stateSelect = useRoommateSelect(
        "state",
        states.map((state) => {
            return { value: state, userString: state };
        })
    );
    const universitySelect = useRoommateSelect(
        "university",
        schools
            .filter((school) => school.state === details.state)
            .map((school) => {
                return { value: school.id, userString: `${school.name} (${school.abbreviation})` };
            })
    );
    const levelSelect = useRoommateSelect("level", options.level);
    return (
        <div className="page-two">
            {stateSelect}
            {universitySelect}
            {levelSelect}
            <div
                className="input-wrapper slide-in-rest"
                {...(errors.department.error
                    ? { "data-error-message": `${errors.department.message}` }
                    : null)}
            >
                <label htmlFor="department">department</label>
                <input
                    type="tel"
                    className="department"
                    id="department"
                    name="department"
                    placeholder="Your department"
                    onKeyUp={(e) => validateInput(e, setErrors)}
                    onChange={(e) => {
                        setDetails((p) => {
                            const el = e.target as HTMLInputElement;
                            return { ...p, [el.name]: el.value };
                        });
                    }}
                    value={details.department}
                />
            </div>
            <div
                className="input-wrapper slide-in-rest"
                {...(errors.pets.error ? { "data-error-message": `${errors.pets.message}` } : null)}
            >
                <label htmlFor="pets">Your pets (Optional)</label>
                <input
                    type="tel"
                    className="pets"
                    id="pets"
                    name="pets"
                    placeholder="Seperate each pet with a comma ( , )"
                    onChange={(e) => {
                        setDetails((p) => {
                            const el = e.target as HTMLInputElement;
                            return { ...p, [el.name]: el.value };
                        });
                    }}
                    value={details.pets}
                />
            </div>
            <div className="navigation-buttons slide-in-rest">
                <Link to={routes.roommateOnboarding.index} replace={true} className="back">
                    back
                </Link>
                <Link to={routes.roommateOnboarding.pageThree} replace={true} className="next">
                    next
                </Link>
            </div>
        </div>
    );
}

export default PageTwo;
