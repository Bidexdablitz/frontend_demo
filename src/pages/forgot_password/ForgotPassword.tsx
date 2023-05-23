import { useHandleFormSubmit, validateEmail, validateInput } from "utilities/handleFormSubmit";
import { AlertMessage, useAnimateIn, useLoadingAnimation } from "utilities/customHooks";
import { api } from "utilities/globalVariables";
import "pages/sign_up/sign-up.scss";
import "./forgot-password.scss";

function ForgotPassword() {
    useAnimateIn(".slide-in-rest", { threshold: 0.7 });
    useLoadingAnimation();
    const handleFormSubmit = useHandleFormSubmit((data: any) =>
        AlertMessage(
            "An email has been sent to the provided email address with your password reset instructions"
        )
    );

    return (
        <div className="sign-in-page-wrapper">
            <div className="img">
                <div className="inner"></div>
            </div>
            <section className="sign-in-page forgot-password-page">
                <h1 className="heading slide-in-rest">forgot password?</h1>
                <p className="sub-heading slide-in-rest">
                    Enter your email below to recieve your password reset instructions.
                </p>
                <form
                    action={api.resetPassword.reset}
                    method="post"
                    autoComplete="off"
                    onSubmit={handleFormSubmit}
                >
                    <div className="form-inputs">
                        <div className="input-wrapper email slide-in-rest">
                            <label htmlFor="email">email</label>
                            <input
                                type="email"
                                className="email"
                                id="email"
                                name="email"
                                placeholder="registered email address"
                                onKeyUp={validateInput}
                                onBlur={validateEmail}
                            />
                        </div>
                    </div>

                    <br />
                    <button type="submit" className="slide-in-rest">
                        send
                    </button>
                </form>
            </section>
        </div>
    );
}

export default ForgotPassword;
