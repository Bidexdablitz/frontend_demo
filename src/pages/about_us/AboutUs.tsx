import * as React from "react";
import heroImg from "assets/images/portrait-happy-young-women.jpg";
import "./about.scss";
import MessageUs from "components/message_us/MessageUs";
import Reviews from "components/reviews/Reviews";
import AboutHero from "./components/about_hero/AboutHero";
import { useAnimateIn, useSprinkles } from "utilities/customHooks";
import WhatWeDo from "./components/what_we_do/WhatWeDo";
import ImageSlider from "./components/image_slider/ImageSlider";
import OurAchievements from "./components/our_achievements/OurAchievements";
import WhatIsImportantToUs from "./components/what_is_important_to_us/WhatIsImportantToUs";
import OurCoreValues from "./components/our_core_values/OurCoreValues";

function AboutUs() {
    const sprinkles = useSprinkles();
    useAnimateIn(".slide-in-rest", { threshold: 0.7 });

    return (
        <>
            <AboutHero />
            <WhatWeDo />
            <ImageSlider />
            <OurAchievements />
            <WhatIsImportantToUs />
            <OurCoreValues />
            <Reviews />
            <MessageUs />
            {sprinkles}
        </>
    );
}

export default AboutUs;
