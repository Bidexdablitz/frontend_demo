import * as React from "react";
import { Link } from "react-router-dom";
import { routes } from "router";
import { useLoadingAnimation } from "utilities/customHooks";
import "./404.scss";

function ErrorPage404() {
    useLoadingAnimation();

    return (
        <section className="error-page-404">
            <div className="info">
                <h1>we are sorry, page not found!</h1>
                <p>
                    The page you are looking for might have <br /> been removed had it’s name changed or is
                    temporarily unavailable
                </p>
                <Link to={routes.index} className="back">
                    back to homepage
                </Link>
            </div>
        </section>
    );
}

export default ErrorPage404;
