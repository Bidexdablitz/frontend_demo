import { Link, LoaderFunction, LoaderFunctionArgs, redirect } from "react-router-dom";
import { routes } from "router";
import {
    useAnimateIn,
    useGoogleSignIn,
    useLoadingAnimation,
    useNavigateIfAuthenticated,
    useUrlMessage,
} from "utilities/customHooks";
import { validateInput, validateEmail, useHandleFormSubmit } from "utilities/handleFormSubmit";
import { api } from "utilities/globalVariables";
import { useSignInUser } from "utilities/authentication";
import "pages/sign_up/sign-up.scss";
import { getLocalUser, getUrlParams } from "utilities/helperFunctions";

export function loader({ request }: LoaderFunctionArgs) {
    if (getLocalUser()) {
        const next = getUrlParams(request.url).next ? getUrlParams(request.url).next : routes.index;
        return redirect(next);
    }
    return null;
}

function SignIn() {
    useAnimateIn(".slide-in-rest", { threshold: 0.7 });
    useLoadingAnimation();
    useUrlMessage();
    useNavigateIfAuthenticated();
    const signin = useSignInUser();
    const handleFormSubmit = useHandleFormSubmit(signin);
    const login = useGoogleSignIn(signin);

    return (
        <div className="sign-in-page-wrapper">
            <div className="img">
                <div className="inner"></div>
            </div>
            <section className="sign-in-page">
                <h1 className="heading slide-in-rest">welcome back</h1>
                <p className="sub-heading slide-in-rest">
                    Ensure to fill the required forms with the right details as any.
                </p>
                <form action={api.login} method="post" autoComplete="off" onSubmit={handleFormSubmit}>
                    <div className="form-inputs">
                        <button
                            type="button"
                            className="google-authentication slide-in-rest"
                            onClick={() => login()}
                        >
                            sign up with google
                        </button>

                        <div className="input-wrapper email slide-in-rest">
                            <label htmlFor="email">email</label>
                            <input
                                type="email"
                                className="email"
                                id="email"
                                name="username"
                                placeholder="your email address"
                                onKeyUp={validateInput}
                                onBlur={validateEmail}
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
                    <div className="forgot-password-wrapper">
                        <label htmlFor="remember-me" className="remember-me slide-in-rest">
                            <input type="checkbox" name="remember_me" id="remember-me" />
                            Remember me?
                        </label>
                        <Link to={routes.forgotPassword} className="forgot-password slide-in-rest">
                            forgot password?
                        </Link>
                    </div>
                    <br />
                    <button type="submit" className=" slide-in-rest">
                        Login
                    </button>
                </form>
                <p className="switch-page slide-in-rest">
                    Do not have an account?{" "}
                    <Link to={routes.signUp} replace={true}>
                        Sign up
                    </Link>
                </p>
            </section>
        </div>
    );
}

export default SignIn;
