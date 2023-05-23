import * as React from "react";
import { Link } from "react-router-dom";
import { routes } from "router";
import "./how-to-get-a-roommate.scss";

function HowToGetARoommate() {
    return (
        <section className="how-to-get-a-roommate">
            <h2 className="heading slide-in-rest">
                would you like to know how to get a friend or roommate on studentrealestate?
            </h2>
            <p className="sub-heading slide-in-rest">
                Click on the link button below to know more about getting a roommate.
            </p>
            <Link to={routes.guidesToUse} className="slide-in-rest">
                Guides on how to request a friend or roommate
            </Link>
        </section>
    );
}

export default HowToGetARoommate;
