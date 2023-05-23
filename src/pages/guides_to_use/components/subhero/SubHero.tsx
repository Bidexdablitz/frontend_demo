import * as React from "react";
import greenList from "assets/images/icons/green-list-icon.svg";
import blueTick from "assets/images/icons/blue-tick-icon.svg";
import redChrome from "assets/images/icons/red-chrome-icon.svg";
import "pages/about_us/components/our_core_values/our-core-values.scss";
import "./sub-hero.scss";
function SubHero() {
    return (
        <section className="sub-hero">
            <div className="article-wrapper">
                <article>
                    <img src={greenList} alt="" className="slide-in-rest" />
                    <h3 className="small-heading slide-in-rest">complete your profile</h3>
                    <p className="write-up slide-in-rest">
                        Let others know your lifestyle preferences, the more info the better
                    </p>
                </article>
                <article>
                    <img src={blueTick} alt="" className="slide-in-rest" />
                    <h3 className="small-heading slide-in-rest">pay the required fee</h3>
                    <p className="write-up slide-in-rest">
                        Let others know your lifestyle preferences, the more info the better
                    </p>
                </article>
                <article>
                    <img src={redChrome} alt="" className="slide-in-rest" />
                    <h3 className="small-heading slide-in-rest">browse roommates/friends</h3>
                    <p className="write-up slide-in-rest">
                        Let others know your lifestyle preferences, the more info the better
                    </p>
                </article>
            </div>
        </section>
    );
}

export default SubHero;
