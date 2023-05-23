import * as React from "react";
import { Link } from "react-router-dom";
import { routes } from "router";
import "./about-hero.scss";

function AboutHero() {
    return (
        <section className="about-hero">
            <h1 className="heading slide-in-rest">Get a Roommate Of Your Choice and Make New Friend(s)</h1>
            <p className="sub-heading slide-in-rest">
                Click on the link button below to know more about getting a roommate.
            </p>

            <div className="buttons slide-in-rest">
                <Link to={routes.roommateOnboarding.index} className="request-roommate">
                    request roommate
                </Link>
                <Link to={routes.friendOnboarding.index} className="request-friend">
                    request friend
                </Link>
            </div>
        </section>
    );
}

export default AboutHero;
