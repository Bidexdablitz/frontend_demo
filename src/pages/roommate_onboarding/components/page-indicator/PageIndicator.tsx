import * as React from "react";
import "./page-indicator.scss";
import { Link, useLocation } from "react-router-dom";
import { routes } from "router";
import { useAnimateIn } from "utilities/customHooks";

function PageIndicator() {
    const location = useLocation();
    const [page, setPage] = React.useState("one");
    React.useEffect(() => {
        if (location.pathname.match(routes.roommateOnboarding.index)) setPage("one");
        if (location.pathname.match(routes.roommateOnboarding.pageTwo)) setPage("two");
        if (location.pathname.match(routes.roommateOnboarding.pageThree)) setPage("three");
    }, [location]);

    return (
        <div className="slide-in-wrapper slide-in-rest">
            <section className={`page-indicator ${page}`}>
                <Link to={routes.roommateOnboarding.index} replace={true} className="number">
                    1
                </Link>
                <Link to={routes.roommateOnboarding.pageTwo} replace={true} className="number">
                    2
                </Link>
                <Link to={routes.roommateOnboarding.pageThree} replace={true} className="number">
                    3
                </Link>
            </section>
        </div>
    );
}

export default PageIndicator;
