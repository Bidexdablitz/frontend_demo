import React, { useState, useRef, useContext, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { routes } from "router";
import { themeContext } from "utilities/contextDefinitions";
import { themes } from "utilities/globalVariables";
import companyLogo from "assets/images/company-logo.png";
import "components/header/header.scss";
import "./dashboard-header.scss";

function DashboardHeader() {
    const [openNav, setOpenNav] = useState(false);
    const { theme, setTheme } = useContext(themeContext);
    const headerRef = useRef(null);

    function toggleTheme(): void {
        theme === themes.dark ? setTheme(themes.light) : setTheme(themes.dark);
    }

    return (
        <section className="dashboard-header">
            <ul className="dashboard-navigation">
                <li>
                    <NavLink
                        to={routes.dashboard.home}
                        className={(p) => activeLink(p, "link")}
                        replace={true}
                    >
                        dashboard
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={routes.dashboard.profile}
                        className={(p) => activeLink(p, "link")}
                        replace={true}
                    >
                        profile
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={routes.dashboard.downlines}
                        className={(p) => activeLink(p, "link")}
                        replace={true}
                    >
                        downlines
                    </NavLink>
                </li>
                <div className={`main-navigation ${openNav ? "open-nav" : ""}`}>
                    <ul>
                        <li>
                            <Link to={routes.notifications} className="notification"></Link>
                        </li>
                        <button className="theme-toggle" onClick={toggleTheme}></button>
                    </ul>
                </div>
            </ul>
            <header ref={headerRef} className={`header ${openNav ? "open-nav" : ""}`}>
                <img src={companyLogo} className="company-logo"></img>
                <div className="hamburger-menu slide-in-rest" onClick={() => setOpenNav((prev) => !prev)}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </header>
        </section>
    );
}

function activeLink(props: any, extra: string) {
    return props.isActive ? `active ${extra}` : extra;
}
export default DashboardHeader;
