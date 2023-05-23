import React, { useEffect, useRef } from "react";
import { useResizeObserver } from "utilities/customHooks";
import { breakPoints } from "utilities/globalVariables";
import { Component } from "react";
import "./hero.scss";
import { Link } from "react-router-dom";
import { routes } from "router";

function Hero() {
    const heroRef = useRef<HTMLElement>(null);
    useResizeObserver(resizeHero, heroRef);

    return (
        <section className="hero" ref={heroRef}>
            <h1 className="heading slide-in-rest">Find your dream roommate and your next bestfriend.</h1>
            <p className="sub-heading slide-in-rest">
                Access to a trusted roommate in your school at an affordable price.
            </p>
            <Link to={routes.roommateOnboarding.index} className="request-roommate slide-in-rest">
                request roommate
            </Link>
            <Link to={routes.friendOnboarding.index} className="request-friend slide-in-rest">
                request friend
            </Link>
            <ul className="social-media-links">
                <li className="facebook slide-in-rest"></li>
                <li className="instagram slide-in-rest"></li>
                <li className="twitter slide-in-rest"></li>
                <li className="whatsapp slide-in-rest"></li>
            </ul>
        </section>
    );
}
export function resizeHero(entry: ResizeObserverEntry) {
    const heroElement = entry.target as HTMLElement;
    const heroElementHeight = entry.contentRect.height;
    if (window.innerWidth <= breakPoints.extraSmall) {
        heroElement.style.marginBottom = `${heroElementHeight * 0.6}px`;
    } else {
        heroElement.style.marginBottom = `0px`;
    }
}
export default Hero;
