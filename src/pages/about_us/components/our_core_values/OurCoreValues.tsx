import * as React from "react";
import firstAid from "assets/images/icons/first-aid-icon.png";
import greenDrip from "assets/images/icons/green-drip-icon.png";
import eye from "assets/images/icons/eye-icon.png";
import "./our-core-values.scss";

function OurCoreValues() {
    return (
        <section className="our-core-values">
            <h2 className="heading slide-in-rest">our core values</h2>
            <p className="sub-heading slide-in-rest">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate?
            </p>
            <div className="article-wrapper">
                <article>
                    <img src={firstAid} alt="" className="slide-in-rest" />
                    <h3 className="small-heading slide-in-rest">serve first</h3>
                    <p className="write-up slide-in-rest">
                        Finally, a valid reason to spend time browsing social media. Facebook is a wonderful
                        way to look for roommates, and most cities have multiple.
                    </p>
                </article>
                <article>
                    <img src={greenDrip} alt="" className="slide-in-rest" />
                    <h3 className="small-heading slide-in-rest">be transparent</h3>
                    <p className="write-up slide-in-rest">
                        Finally, a valid reason to spend time browsing social media. Facebook is a wonderful
                        way to look for roommates, and most cities have multiple.
                    </p>
                </article>
                <article>
                    <img src={eye} alt="" className="slide-in-rest" />
                    <h3 className="small-heading slide-in-rest">empower seekers</h3>
                    <p className="write-up slide-in-rest">
                        Finally, a valid reason to spend time browsing social media. Facebook is a wonderful
                        way to look for roommates, and most cities have multiple.
                    </p>
                </article>
            </div>
        </section>
    );
}

export default OurCoreValues;
