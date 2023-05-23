import * as React from "react";
import Hero from "./components/hero/Hero";
import HowToGetARoommate from "components/how_to_get_a_roommate/HotToGetARoommate";
import MessageUs from "../../components/message_us/MessageUs";
import OurAim from "./components/our_aim/ourAim";
import Reviews from "components/reviews/Reviews";
import Universities from "./components/universities/Universities";
import { useSprinkles, useAnimateIn, useTopTracker } from "utilities/customHooks";
import "./home.scss";
import { userContext } from "utilities/contextDefinitions";

export async function loader() {
    return null;
}

function App() {
    const sprinkles = useSprinkles(20);
    const { user } = React.useContext(userContext);
    useAnimateIn(".slide-in-rest", { threshold: 0.7 }, [user]);
    const trackerRef = React.useRef<HTMLDivElement>(null);
    useTopTracker(trackerRef);

    return (
        <>
            <div className="top-tracker" ref={trackerRef} />
            <Hero />
            <OurAim />
            <Universities />
            <Reviews />
            <MessageUs />
            <HowToGetARoommate />
            {sprinkles}
        </>
    );
}

export default App;
