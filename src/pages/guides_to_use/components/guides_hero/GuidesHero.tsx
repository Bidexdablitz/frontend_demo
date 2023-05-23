import React, { useRef } from "react";
import { useResizeObserver } from "utilities/customHooks";
import { resizeHero } from "pages/home/components/hero/Hero";
import "pages/home/components/hero/hero.scss";
import "./guides-hero.scss";
import { Link } from "react-router-dom";
import { routes } from "router";

function GuidesHero() {
    const heroRef = useRef<HTMLElement>(null);
    useResizeObserver(resizeHero, heroRef);

    return (
        <section className="hero guides-hero" ref={heroRef}>
            <h1 className="heading slide-in-rest">
                Guides To Request <br /> A Roommate Or A Friend Here
            </h1>
            <p className="sub-heading slide-in-rest">
                Here are the important step to take to make the most of studentrealestate
            </p>
            <Link to={routes.roommateOnboarding.index} className="request-roommate slide-in-rest">
                request roommate
            </Link>
            <Link to={routes.friendOnboarding.index} className="request-friend slide-in-rest">
                request friend
            </Link>
        </section>
    );
}

export default GuidesHero;
