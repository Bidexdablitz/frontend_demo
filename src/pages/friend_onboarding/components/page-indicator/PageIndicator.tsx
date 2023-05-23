import * as React from "react";
import "pages/roommate_onboarding/components/page-indicator/page-indicator.scss";
import { Link, useLocation } from "react-router-dom";
import { routes } from "router";
import { useAnimateIn } from "utilities/customHooks";

function PageIndicator() {
    const location = useLocation();
    const [page, setPage] = React.useState("one");
    React.useEffect(() => {
        if (location.pathname.match(routes.friendOnboarding.index)) setPage("one");
        if (location.pathname.match(routes.friendOnboarding.pageTwo)) setPage("two");
        if (location.pathname.match(routes.friendOnboarding.pageThree)) setPage("three");
    }, [location]);

    return (
        <div className="slide-in-wrapper slide-in-rest">
            <section className={`page-indicator ${page}`}>
                <Link to={routes.friendOnboarding.index} replace={true} className="number">
                    1
                </Link>
                <Link to={routes.friendOnboarding.pageTwo} replace={true} className="number">
                    2
                </Link>
                <Link to={routes.friendOnboarding.pageThree} replace={true} className="number">
                    3
                </Link>
            </section>
        </div>
    );
}

export default PageIndicator;
