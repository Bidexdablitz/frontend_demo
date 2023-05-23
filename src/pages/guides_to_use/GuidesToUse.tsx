import * as React from "react";
import { useAnimateIn, useLoadingAnimation, useSprinkles } from "utilities/customHooks";
import "./guides-to-use.scss";
import GuidesHero from "./components/guides_hero/GuidesHero";
import SubHero from "./components/subhero/SubHero";
import RoommateSteps from "./components/roommate_steps/RoommateSteps";
import FriendSteps from "./components/friend_steps/FriendSteps";
import Priority from "./components/priority/Priority";
import MessageUs from "components/message_us/MessageUs";
import Faq from "./components/faq/Faq";

function GuidesToUse() {
    const sprinkles = useSprinkles();
    useAnimateIn(".slide-in-rest", { threshold: 0.7 });
    useLoadingAnimation();

    return (
        <section className="guides-to-use">
            <GuidesHero />
            <SubHero />
            <RoommateSteps />
            <FriendSteps />
            <section className="note">
                <h2 className="heading slide-in-rest">note</h2>
                <p className="slide-in-rest">
                    Be rest assured that we will 100% refund your money to you if our service did not meet
                    your expectations! All you have to do is make a complaint by sending us a DM in any of our
                    social media platforms. <br /> Thank you!
                </p>
            </section>
            <Priority />
            <Faq />
            <MessageUs />
            {sprinkles}
        </section>
    );
}

export default GuidesToUse;
