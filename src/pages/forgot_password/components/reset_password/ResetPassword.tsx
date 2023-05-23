import { useHandleFormSubmit, validateConfirmPassword, validateInput } from "utilities/handleFormSubmit";
import { AlertMessage, useAnimateIn, useLoadingAnimation } from "utilities/customHooks";
import { LoaderFunctionArgs, redirect } from "react-router-dom";
import { api } from "utilities/globalVariables";
import { getUrlParams } from "utilities/helperFunctions";
import "pages/sign_up/sign-up.scss";
import "../../forgot-password.scss";
import { routes } from "router";
import Axios from "axiosInstance";

export async function loader({ request }: LoaderFunctionArgs) {
    const token = getUrlParams(request.url).token;
    try {
        const res = await Axios.post(api.resetPassword.validateToken, { token });
        AlertMessage("Token verification successful, you can reset your password");
    } catch (err: any) {
        if (err.response) {
            switch (err.response.status) {
                case 404:
                    AlertMessage("Unable to verify your token");
                    return redirect(routes.forgotPassword);
                default:
                    return redirect(routes.forgotPassword);
            }
        }
    }
    return null;
}

function ResetPassword() {
    const handleFormSubmit = useHandleFormSubmit(() => "");

    useAnimateIn(".slide-in-rest", { threshold: 0.7 });
    useLoadingAnimation();

    return (
        <div className="sign-in-page-wrapper">
            <div className="img">
                <div className="inner"></div>
            </div>
            <section className="sign-in-page forgot-password-page">
                <h1 className="heading slide-in-rest">Reset password?</h1>
                <p className="sub-heading slide-in-rest">
                    Enter your email below to recieve your password reset instructions.
                </p>
                <form
                    action={api.resetPassword.confirm}
                    method="post"
                    autoComplete="off"
                    onSubmit={handleFormSubmit}
                >
                    <div className="form-inputs">
                        <div className="input-wrapper password slide-in-rest">
                            <label htmlFor="password">password</label>
                            <input
                                type="password"
                                className="password"
                                id="password"
                                name="password"
                                placeholder="choose new a password"
                                onKeyUp={(e) => {
                                    validateInput(e);
                                }}
                            />
                        </div>
                        <div className="input-wrapper password slide-in-rest">
                            <label htmlFor="confirm-password">confirm password</label>
                            <input
                                type="password"
                                className="password"
                                id="confirm-password"
                                name="confirm_password"
                                placeholder="confirm your password"
                                onKeyUp={(e) => {
                                    validateConfirmPassword(e);
                                }}
                            />
                        </div>
                    </div>
                    <input type="hidden" name="token" value={getUrlParams(window.location.href).token} />
                    <br />
                    <button type="submit" className="slide-in-rest">
                        send
                    </button>
                </form>
            </section>
        </div>
    );
}

export default ResetPassword;
