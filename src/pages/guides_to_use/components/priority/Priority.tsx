import * as React from "react";
import "pages/about_us/components/our_core_values/our-core-values.scss";
import greenTick from "assets/images/icons/green-tick-icon.svg";
import blueFastforward from "assets/images/icons/blue-fastforward-icon.svg";
import redPerson from "assets/images/icons/red-person-icon.svg";

function Priority() {
    return (
        <section className="priority">
            <h2 className="heading slide-in-rest">Prioritize Safety and Time</h2>
            <p className="sub-heading slide-in-rest">
                Upgrade your account to get access to Roomi's safety features and boosted ranking
            </p>
            <div className="article-wrapper">
                <article>
                    <img src={greenTick} alt="" className="slide-in-rest" />
                    <h3 className="small-heading slide-in-rest">Better Conversations</h3>
                    <p className="write-up slide-in-rest">
                        Let others know that they’re talking to a real person.
                    </p>
                </article>
                <article>
                    <img src={blueFastforward} alt="" className="slide-in-rest" />
                    <h3 className="small-heading slide-in-rest">Background Checks</h3>
                    <p className="write-up slide-in-rest">
                        Let others know that they’re talking to a real person.
                    </p>
                </article>
                <article>
                    <img src={redPerson} alt="" className="slide-in-rest" />
                    <h3 className="small-heading slide-in-rest">Faster Matches</h3>
                    <p className="write-up slide-in-rest">
                        Let others know that they’re talking to a real person.
                    </p>
                </article>
            </div>
        </section>
    );
}

export default Priority;
