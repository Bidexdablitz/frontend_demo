import * as React from "react";
import ContactHero from "./components/contact_hero/ContactHero";
import Reviews from "components/reviews/Reviews";
import MessageUs from "components/message_us/MessageUs";
import ContactInfo from "./components/contact_info/ContactInfo";
import { useSprinkles, useAnimateIn } from "utilities/customHooks";

function ContactUs() {
    const sprinkles = useSprinkles();
    useAnimateIn(".slide-in-rest", { threshold: 0.7 });

    return (
        <>
            <ContactHero />
            <ContactInfo />
            <Reviews />
            <MessageUs />
        </>
    );
}

export default ContactUs;
