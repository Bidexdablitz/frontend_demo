import * as React from "react";
import { Component } from "react";
import ourAimImg0 from "../../assets/images/our-aim-0.png";
import ourAimImg1 from "../../assets/images/our-aim-1.png";
import "./our-aim.scss";

function OurAim() {
    return (
        <section className="our-aim">
            <h2 className="heading">our major work here is</h2>
            <p className="sub-heading">At Studentrealestate we major in two things, which are...</p>
            <article className="content">
                <div>
                    <h3>Find a Roommate</h3>
                    <p className="write-up">
                        Finally, a valid reason to spend time browsing social media. Facebook is a wonderful
                        way to look for roommates, and most cities have multiple groups designated for
                        apartment and roommate searching.
                    </p>
                    <button>request roommate</button>
                </div>
                <img src={ourAimImg0} alt="" />
                <div>
                    <h3>Find a Friend</h3>
                    <p className="write-up">
                        Finally, a valid reason to spend time browsing social media. Facebook is a wonderful
                        way to look for roommates, and most cities have multiple groups designated for
                        apartment and roommate searching.
                    </p>
                    <button>request friend</button>
                </div>
                <img src={ourAimImg1} alt="" />
            </article>
        </section>
    );
}

export default OurAim;
