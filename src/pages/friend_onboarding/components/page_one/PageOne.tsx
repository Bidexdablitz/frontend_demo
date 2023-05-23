import * as React from "react";
import { routes } from "router";
import { validateEmail, validateInput, validateTel } from "utilities/handleFormSubmit";
import { Link } from "react-router-dom";
import { useAnimateIn } from "utilities/customHooks";
import { friendDetailsContext, friendErrorDetailsContext } from "utilities/contextDefinitions";
import { maxDate, minDate } from "utilities/globalVariables";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "pages/roommate_onboarding/components/page_one/page-one.scss";

function PageOne() {
    useAnimateIn(".slide-in-rest", { threshold: 0.7 });
    const { details, setDetails } = React.useContext(friendDetailsContext);
    const { errors, setErrors } = React.useContext(friendErrorDetailsContext);
    const dateRef = React.useRef(null);

    return (
        <div className="page-one">
            <div
                className="input-wrapper name slide-in-rest"
                {...(errors.name.error ? { "data-error-message": `${errors.name.message}` } : null)}
            >
                <label htmlFor="name">full name</label>
                <input
                    type="text"
                    className="name"
                    id="name"
                    name="name"
                    placeholder="Your full name"
                    onKeyUp={(e) => validateInput(e, setErrors)}
                    onChange={(e) => {
                        setDetails((p) => {
                            const el = e.target as HTMLInputElement;
                            return { ...p, [el.name]: el.value };
                        });
                    }}
                    value={details.name}
                />
            </div>
            <div
                className="input-wrapper email slide-in-rest"
                {...(errors.email.error ? { "data-error-message": `${errors.email.message}` } : null)}
            >
                <label htmlFor="email">email</label>
                <input
                    type="email"
                    className="email"
                    id="email"
                    name="email"
                    placeholder="Your full email"
                    onKeyUp={(e) => validateInput(e, setErrors)}
                    onBlur={(e) => validateEmail(e, setErrors)}
                    onChange={(e) => {
                        setDetails((p) => {
                            const el = e.target as HTMLInputElement;
                            return { ...p, [el.name]: el.value };
                        });
                    }}
                    value={details.email}
                />
            </div>
            <div
                className="input-wrapper phone slide-in-rest"
                {...(errors.phone.error ? { "data-error-message": `${errors.phone.message}` } : null)}
            >
                <label htmlFor="phone">Phone number</label>
                <input
                    type="tel"
                    className="phone"
                    id="phone"
                    name="phone"
                    placeholder="Your phone number"
                    onKeyUp={(e) => validateInput(e, setErrors)}
                    onBlur={(e) => validateTel(e, setErrors)}
                    onChange={(e) => {
                        setDetails((p) => {
                            const el = e.target as HTMLInputElement;
                            return { ...p, [el.name]: el.value };
                        });
                    }}
                    value={details.phone}
                />
            </div>
            <div
                className="input-wrapper dob slide-in-rest"
                {...(errors.dob.error ? { "data-error-message": `${errors.dob.message}` } : null)}
            >
                <label htmlFor="dob">Date of birth</label>
                <DatePicker
                    placeholderText="Your date of birth"
                    className="dob"
                    name="dob"
                    id="dob"
                    maxDate={maxDate}
                    minDate={minDate}
                    onChange={(date) => {
                        setDetails((prev) => {
                            return { ...prev, dob: date };
                        });
                    }}
                    selected={details.dob}
                    dateFormat="d MMMM, yyyy"
                />
            </div>
            <div className="navigation-buttons slide-in-rest">
                <Link to={routes.friendOnboarding.pageTwo} replace={true} className="next">
                    next
                </Link>
            </div>
        </div>
    );
}
export default PageOne;
