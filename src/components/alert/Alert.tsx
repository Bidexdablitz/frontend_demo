import * as React from "react";
import "./alert.scss";

type Props = {
    message?: string;
};
function Alert(props: Props) {
    return (
        <section className="alert">
            <p className="message" />
        </section>
    );
}

export default Alert;
