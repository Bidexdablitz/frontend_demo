import * as React from "react";
import { Component } from "react";
import ourAimImg0 from "assets/images/our-aim-0.png";
import ourAimImg1 from "assets/images/our-aim-1.png";
import "./our-aim.scss";
import { Link } from "react-router-dom";
import { routes } from "router";

function OurAim() {
    return (
        <section className="our-aim">
            <h2 className="heading slide-in-rest">our major work here is</h2>
            <p className="sub-heading slide-in-rest">
                At Studentrealestate we major in two things, which are...
            </p>
            <article className="content">
                <div>
                    <h3 className="slide-in-rest">Find a Roommate</h3>
                    <p className="write-up slide-in-rest">
                        Finally, a valid reason to spend time browsing social media. Facebook is a wonderful
                        way to look for roommates, and most cities have multiple groups designated for
                        apartment and roommate searching.
                    </p>
                    <Link to={routes.roommateOnboarding.index} className="slide-in-rest">
                        request roommate
                    </Link>
                </div>
                <img src={ourAimImg0} className="slide-in-rest" />
                <div>
                    <h3 className="slide-in-rest">Find a Friend</h3>
                    <p className="write-up slide-in-rest">
                        Finally, a valid reason to spend time browsing social media. Facebook is a wonderful
                        way to look for roommates, and most cities have multiple groups designated for
                        apartment and roommate searching.
                    </p>
                    <Link to={routes.friendOnboarding.index} className="slide-in-rest">
                        request friend
                    </Link>
                </div>
                <img src={ourAimImg1} className="slide-in-rest" />
            </article>
        </section>
    );
}

export default OurAim;
