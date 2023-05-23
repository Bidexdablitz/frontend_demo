import * as React from "react";
import { routes } from "router";
import {
    validateDate,
    validateEmail,
    validateFullName,
    validateInput,
    validateTel,
} from "utilities/handleFormSubmit";
import { Link } from "react-router-dom";
import { useAnimateIn, useRoommateSelect } from "utilities/customHooks";
import { roommateDetailsContext, roommateErrorDetailsContext } from "utilities/contextDefinitions";
import { maxDate, minDate, options } from "utilities/globalVariables";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./page-one.scss";

function PageOne() {
    useAnimateIn(".slide-in-rest", { threshold: 0.7 });
    const { details, setDetails } = React.useContext(roommateDetailsContext);
    const { errors, setErrors } = React.useContext(roommateErrorDetailsContext);
    const dateRef = React.useRef(null);
    const genderSelect = useRoommateSelect("gender", options.gender);

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
                    onKeyUp={(e) => validateFullName(e, setErrors)}
                    onChange={(e) => {
                        setDetails((p) => {
                            return { ...p, [e.target.name]: e.target.value };
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
                            return { ...p, [e.target.name]: e.target.value };
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
                {...(errors.date_of_birth.error
                    ? { "data-error-message": `${errors.date_of_birth.message}` }
                    : null)}
            >
                <label htmlFor="date_of_birth">Date of birth</label>
                <DatePicker
                    ref={dateRef}
                    placeholderText="Your date of birth"
                    className="date_of_birth"
                    name="date_of_birth"
                    id="date_of_birth"
                    maxDate={maxDate}
                    minDate={minDate}
                    onChange={(date) => {
                        validateDate(dateRef, date, setErrors);
                        setDetails((prev) => {
                            return { ...prev, date_of_birth: date };
                        });
                    }}
                    selected={details.date_of_birth}
                    dateFormat="d MMMM, yyyy"
                />
            </div>
            {genderSelect}

            <div className="navigation-buttons slide-in-rest">
                <Link to={routes.roommateOnboarding.pageTwo} replace={true} className="next">
                    next
                </Link>
            </div>
        </div>
    );
}

export default PageOne;
