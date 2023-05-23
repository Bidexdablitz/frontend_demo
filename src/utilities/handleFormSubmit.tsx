import React, { FormEvent } from "react";
import { RoommateErrorDetails } from "./typeDefs";
import { AlertMessage } from "./customHooks";
import { useNavigate } from "react-router-dom";
import { parseFormData } from "./helperFunctions";
import { useSignInUser, useSignOutUser } from "./authentication";
import Axios from "axiosInstance";
import { handle401Unauthorized } from "./errorHandlers";
import { optionalFields } from "./globalVariables";

export function useHandleFormSubmit(
    func: any,
    details?: any,
    errors?: any,
    setErrors?: any,
    errorRedirectRoute?: string
) {
    const navigate = useNavigate();
    const signin = useSignInUser();
    const signout = useSignOutUser();
    return function (e: FormEvent) {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);

        if (details ? detailsIsValid(details, errors, setErrors) : formIsValid(formData, form)) {
            Axios.post(form.getAttribute("action") as string, details ? details : parseFormData(formData))
                .then(({ data }) => func(data))
                .catch((err) => {
                    switch (err.response.status) {
                        case 401:
                            handle401Unauthorized(err, signin, signout, func, navigate);
                            break;
                        default:
                        // implement later
                    }
                });
        } else {
            AlertMessage("Some of your inputs are invalid. Please correct them to proceed.");
            if (errorRedirectRoute) navigate(errorRedirectRoute, { replace: true });
        }
    };
}

export function validateInput(
    e: React.KeyboardEvent | React.FocusEvent | React.ChangeEvent,
    setErrors: any = null
) {
    const element = e.target as HTMLInputElement;
    const value = element.value.trim();
    if (!value) {
        makeInvalid(element, setErrors, "This input is empty");
    } else {
        makeValid(element, setErrors);
    }
}

export function validateSelect(
    e: React.KeyboardEvent | React.FocusEvent | React.ChangeEvent,
    setErrors: any = null
) {
    const element = e.target as HTMLSelectElement;
    const value = element.value.trim();
    if (!value) {
        makeInvalid(element, setErrors, "This input is empty");
    } else {
        makeValid(element, setErrors);
    }
}

export function validateTel(e: React.FocusEvent, setErrors: any = null) {
    const element = e.target as HTMLInputElement;
    const reg = element.value.trim().match(/[^0][0-9]{9}$/);
    if (!reg) {
        makeInvalid(element, setErrors, "Please input a valid nigerian number");
    }
}

export function validateEmail(e: React.FocusEvent, setErrors: any = null) {
    const element = e.target as HTMLInputElement;
    const reg = element.value
        .trim()
        .match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
    if (!reg) {
        makeInvalid(element, setErrors, "Please input a valid email address");
    }
}

export function validateConfirmPassword(e: React.FocusEvent | React.KeyboardEvent) {
    const element = e.target as HTMLInputElement;
    const passwordValue = (document.querySelector("[name=password]") as HTMLInputElement).value.trim();

    if (element.value.trim() !== passwordValue) {
        makeInvalid(element, null, "This input should match the password");
    } else {
        makeValid(element, null);
    }
}
export function validatePassword(e: React.KeyboardEvent) {
    const element = e.target as HTMLInputElement;
    const confirmpasswordEl = document.querySelector("[name=confirm_password]") as HTMLInputElement;
    const confirmPasswordValue = confirmpasswordEl.value.trim();

    if (element.value.trim() !== confirmPasswordValue) {
        makeInvalid(confirmpasswordEl, null, "This input should match the password");
    } else {
        makeValid(confirmpasswordEl, null);
    }
}

export function validateDate(dateRef: React.RefObject<any>, date: Date | null, setErrors: any = null) {
    if (!dateRef.current) return;
    const input = dateRef.current.input;
    if (!date) {
        makeInvalid(input, setErrors, "This field should not be empty");
    } else {
        makeValid(input, setErrors);
    }
}

export function validateFullName(e: React.KeyboardEvent, setErrors: any = null) {
    const value = (e.target as HTMLInputElement).value.trim();
    if (value.split(" ").filter((el) => el).length === 2) {
        makeValid(e.target as HTMLInputElement, setErrors);
    } else {
        makeInvalid(e.target as HTMLInputElement, setErrors, "Please input your first name and last name");
    }
}

function makeInvalid(
    element: HTMLInputElement | HTMLSelectElement,
    setErrors: any,
    message: string = "Your input is invalid"
) {
    if (setErrors) {
        setErrors((prev: RoommateErrorDetails) => {
            return {
                ...prev,
                [element.name]: { error: true, message: message },
            };
        });
    } else {
        element.parentElement?.classList.add("error");
        element.parentElement?.setAttribute("data-error-message", message);
    }
}

function makeValid(element: HTMLInputElement | HTMLSelectElement, setErrors: any) {
    if (setErrors) {
        setErrors((prev: RoommateErrorDetails) => {
            return {
                ...prev,
                [element.name]: { error: false, message: "" },
            };
        });
    } else {
        element.parentElement?.classList.remove("error");
        element.parentElement?.removeAttribute("data-error-message");
    }
}

export function formIsValid(formData: FormData, form: HTMLFormElement) {
    for (const [key, value] of formData.entries()) {
        if ((value as string).trim() === "") {
            const invalidInput = form.querySelector(`[name='${key}']`) as HTMLInputElement;
            makeInvalid(invalidInput, null, "This input is empty!");
            invalidInput.focus();
            return false;
        }
    }
    for (const el of form.querySelectorAll(".input-wrapper")) {
        if (el.getAttribute("data-error-message") !== null) return false;
    }
    return true;
}

function detailsIsValid(details: any, errors: any, setErrors: any) {
    const empty = Object.keys(details).some((key) => {
        const value = details[key];
        if (key in optionalFields) return false;
        if (typeof value === "boolean" ? (value as unknown as string) === "" : !value) {
            setErrors((prev: any) => {
                return { ...prev, [key]: { error: true, message: "This input is empty" } };
            });
            return true;
        }
        return false;
    });
    if (empty) return false;
    // return false if there is any error in the errors obj
    return !Object.values(errors).some((value: any) => value.error);
}
