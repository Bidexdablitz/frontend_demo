import { useRef, useState } from "react";
import { PaystackButton } from "react-paystack";
import { paystackPublicKey } from "utilities/globalVariables";
import { validateEmail, validateFullName, validateInput, validateTel } from "utilities/handleFormSubmit";
import { useAnimateIn } from "utilities/customHooks";
import "pages/sign_up/sign-up.scss";
import "./payment.scss";

function Payment() {
    useAnimateIn();
    const publicKey = paystackPublicKey;
    const amount = 1000000;
    const formRef = useRef(null);
    function payWithPaystack() {}
    return (
        <div className="sign-up-page-wrapper">
            <div className="img">
                <div className="inner"></div>
            </div>
            <section className="sign-up-page">
                <h1 className="heading slide-in-rest">payment details</h1>
                <p className="sub-heading slide-in-rest">
                    ensure to fill the forms with the right details as any
                </p>
                <form ref={formRef} autoComplete="off">
                    <div className="form-inputs">
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
                    </div>
                    <br />
                    <button type="button" className="submit slide-in-rest" onClick={payWithPaystack}>
                        Pay with paystack
                    </button>
                </form>
            </section>
        </div>
    );
}
export default Payment;
