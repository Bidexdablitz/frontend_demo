import * as React from "react";
import "./roommate-steps.scss";

function RoommateSteps() {
    return (
        <section className="roommate-steps">
            <h2 className="heading slide-in-rest">
                Step by step Process On How To Use Studentrealestate to Get Roommate
            </h2>
            <p className="sub-heading slide-in-rest">
                Here are the outlined procedures in order to get paired with your desired roommates.
            </p>
            <ul>
                <li className="slide-in-rest">Click on the link to the website.</li>
                <li className="slide-in-rest">Click on "request a roommate".</li>
                <li className="slide-in-rest">
                    Answer series of questions correctly and click on "NEXT" to move to the next page.
                </li>
                <li className="slide-in-rest">
                    Click on ADD PICTURE (Ensure you add your correct photo in order to get paired)
                </li>
                <li className="slide-in-rest">Click on Submit.</li>
                <li className="slide-in-rest">
                    After submissions, the website automatically generates series of user profiles that have
                    similar personality and potentials to be your roommate.
                </li>
                <li className="slide-in-rest">
                    Hit the like button and like more people in order to get paired quickly.
                </li>
                <li className="slide-in-rest">
                    Once you hit the "Like" button, an option will pop-up for you to either pay or use the
                    referral scheme.
                </li>
                <li className="slide-in-rest">
                    To use the referral scheme, copy and paste your referral message on your whatsapp status
                    or any of your social media platforms.
                </li>
                <li className="slide-in-rest">
                    With a successful referral, you do not have to pay to use our service. You can also decide
                    to pay our service charge if you're finding it difficult to refer and also for a fast and
                    immediate service
                </li>
                <li className="slide-in-rest">
                    Pairing only comes after you have liked your desired roommate's profile and they have
                    liked yours back. Then you automtcally get paired by the website.
                </li>
            </ul>
        </section>
    );
}

export default RoommateSteps;
