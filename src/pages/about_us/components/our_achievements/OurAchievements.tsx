import * as React from "react";
import "./our-achievements.scss";

function OurAchievements() {
    return (
        <section className="our-achievements">
            <h2 className="heading">our achievements</h2>
            <div className="achievement-chart">
                <div className="achievement">
                    <h3 className="number animate-count slide-in-rest" data-suffix="+">
                        2000
                    </h3>
                    <div className="info">site visits</div>
                </div>
                <div className="achievement">
                    <h3 className="number animate-count slide-in-rest" data-suffix="+">
                        40
                    </h3>
                    <div className="info">match make</div>
                </div>
                <div className="achievement">
                    <h3 className="number animate-count slide-in-rest" data-suffix="+">
                        200
                    </h3>
                    <div className="info">roommates</div>
                </div>
                <div className="achievement">
                    <h3 className="number animate-count slide-in-rest" data-suffix="+">
                        500
                    </h3>
                    <div className="info">engagements</div>
                </div>
                <div className="achievement">
                    <h3 className="number animate-count slide-in-rest" data-suffix="">
                        2
                    </h3>
                    <div className="info">finished design sprints</div>
                </div>
                <div className="achievement">
                    <h3 className="number animate-count slide-in-rest" data-suffix="">
                        2
                    </h3>
                    <div className="info">site upgrade</div>
                </div>
            </div>
        </section>
    );
}

export default OurAchievements;
