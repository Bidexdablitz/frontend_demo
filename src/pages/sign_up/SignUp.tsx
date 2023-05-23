import { Link, LoaderFunctionArgs, redirect } from "react-router-dom";
import { routes } from "router";
import { useSignInUser } from "utilities/authentication";
import {
    useAnimateIn,
    useGoogleSignIn,
    useLoadingAnimation,
    useNavigateIfAuthenticated,
    useSelect,
    useStateSchools,
    useUrlMessage,
} from "utilities/customHooks";
import { api } from "utilities/globalVariables";
import {
    useHandleFormSubmit,
    validateEmail,
    validateFullName,
    validateInput,
    validateTel,
} from "utilities/handleFormSubmit";
import { getLocalUser, getUrlParams } from "utilities/helperFunctions";
import "./sign-up.scss";

export function loader({ request }: LoaderFunctionArgs) {
    if (getLocalUser()) {
        const next = getUrlParams(request.url).next ? getUrlParams(request.url).next : routes.index;
        return redirect(next);
    }
    return null;
}

function SignUp() {
    useAnimateIn(".slide-in-rest", { threshold: 0.7 });
    useLoadingAnimation();
    useUrlMessage();
    useNavigateIfAuthenticated();
    const signin = useSignInUser();
    const handleFormSubmit = useHandleFormSubmit(signin);
    const login = useGoogleSignIn(signin);

    const { states, schools } = useStateSchools();
    const [state, stateSelect] = useSelect(
        "state",
        states.map((state) => {
            return { value: state, userString: state };
        })
    );
    const [school, schoolSelect] = useSelect(
        "school",
        schools
            .filter((school) => school.state === state)
            .map((school) => {
                return { value: school.id, userString: school.name };
            })
    );

    return (
        <div className="sign-up-page-wrapper">
            <div className="img">
                <div className="inner"></div>
            </div>
            <section className="sign-up-page">
                <h1 className="heading slide-in-rest">join us today</h1>
                <p className="sub-heading slide-in-rest">
                    ensure to fill the forms with the right details as any
                </p>
                <form action={api.signUp} method="post" autoComplete="off" onSubmit={handleFormSubmit}>
                    <div className="form-inputs">
                        <button
                            type="button"
                            className="google-authentication slide-in-rest"
                            onClick={() => login()}
                        >
                            sign up with google
                        </button>
                        <div className="input-wrapper name slide-in-rest">
                            <label htmlFor="name">full name</label>
                            <input
                                type="text"
                                className="name"
                                id="name"
                                name="name"
                                placeholder="Your full name"
                                onKeyUp={validateFullName}
                            />
                        </div>

                        <div className="input-wrapper username slide-in-rest">
                            <label htmlFor="username">username</label>
                            <input
                                type="text"
                                className="username"
                                id="username"
                                name="username"
                                placeholder="pick a username"
                                onKeyUp={validateInput}
                            />
                        </div>

                        <div className="input-wrapper email slide-in-rest">
                            <label htmlFor="email">email</label>
                            <input
                                type="email"
                                className="email"
                                id="email"
                                name="email"
                                placeholder="your email address"
                                onKeyUp={validateInput}
                                onBlur={validateEmail}
                            />
                        </div>

                        {stateSelect}
                        {schoolSelect}

                        <div className="input-wrapper phone slide-in-rest">
                            <label htmlFor="phone">phone no</label>
                            <input
                                type="tel"
                                className="phone"
                                id="phone"
                                name="phone"
                                placeholder="your phone number"
                                onKeyUp={validateInput}
                                onBlur={validateTel}
                            />
                        </div>

                        <div className="input-wrapper password slide-in-rest">
                            <label htmlFor="password">password</label>
                            <input
                                type="password"
                                className="password"
                                id="password"
                                name="password"
                                placeholder="choose a password"
                                onKeyUp={validateInput}
                            />
                        </div>
                    </div>
                    <label htmlFor="remember-me" className="remember-me slide-in-rest">
                        <input type="checkbox" name="remember_me" id="remember-me" />
                        Remember me?
                    </label>
                    <br />
                    <button type="submit" className=" slide-in-rest">
                        create account
                    </button>
                </form>
                <p className="switch-page slide-in-rest">
                    Do you have an account already?{" "}
                    <Link to={routes.signIn} replace={true}>
                        Login here
                    </Link>
                </p>
            </section>
        </div>
    );
}

export default SignUp;
