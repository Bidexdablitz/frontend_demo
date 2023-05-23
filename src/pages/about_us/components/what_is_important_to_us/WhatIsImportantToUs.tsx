import * as React from "react";
import "./what-is-important-to-us.scss";
import leftIcon from "assets/images/icons/left-icon.png";
import rightIcon from "assets/images/icons/right-icon.png";

function WhatIsImportantToUs() {
    return (
        <section className="what-is-important-to-us wavy-bg">
            <h2 className="heading slide-in-rest">what's important to us</h2>
            <article>
                <h3 className="small-heading slide-in-rest">We work agile</h3>
                <p className="write-up slide-in-rest">
                    Studentrealestates is one of the most admired companies in the academic industry in
                    Nigeria. It offers services that are themselves, benchmarks in their respective
                    categories. Today, Studentrealestates is the undisputed leader in delivery, as far as
                    student's goal is concerned A goal that we have set is to help students get their dream
                    roommate and comfort by finding them roommates who correspond to their lifestyle. Active
                    on the web since 2020, we are currently expanding our services to other countries around
                    the world.
                </p>
                <div className="button-wrapper slide-in-rest">
                    <button className="back">
                        <img src={leftIcon} />
                    </button>
                    <button className="front">
                        <img src={rightIcon} />
                    </button>
                </div>
            </article>
        </section>
    );
}

export default WhatIsImportantToUs;
