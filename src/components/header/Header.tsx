import React, { Component, useContext, useState, useRef, useEffect } from "react";
import "components/header/header.scss";
import companyLogo from "assets/images/company-logo.png";
import { themeContext, userContext } from "utilities/contextDefinitions";
import { themes } from "utilities/globalVariables";
import { NavLink } from "react-router-dom";
import { routes } from "router";
import { useSignOutUser } from "utilities/authentication";

function Header() {
    const [openNav, setOpenNav] = useState(false);
    const { theme, setTheme } = useContext(themeContext);
    const { user } = useContext(userContext);
    const headerRef = useRef(null);
    const signout = useSignOutUser();

    function toggleTheme(): void {
        theme === themes.dark ? setTheme(themes.light) : setTheme(themes.dark);
    }
    function closeNavOnAppClick(e: Event) {
        if ((e.target as HTMLElement).matches(".main-navigation *, .hamburger-menu, .hamburger-menu *"))
            return;
        if (!headerRef.current) return;
        if ((headerRef.current as HTMLHeadElement).classList.contains("open-nav")) {
            setOpenNav(false);
        }
    }

    useEffect(() => {
        document.querySelector(".App")?.addEventListener("click", closeNavOnAppClick);
        return () => document.querySelector(".App")?.removeEventListener("click", closeNavOnAppClick);
    }, [headerRef]);

    return (
        <header ref={headerRef} className={`header ${openNav ? "open-nav" : ""}`}>
            <img src={companyLogo} className="company-logo"></img>
            <nav className="main-navigation">
                <ul>
                    <li className="slide-in-rest">
                        <NavLink className={activeNav} to={routes.index} onClick={() => setOpenNav(false)}>
                            home
                        </NavLink>
                    </li>
                    <li className="slide-in-rest">
                        <NavLink className={activeNav} to={routes.about} onClick={() => setOpenNav(false)}>
                            about us
                        </NavLink>
                    </li>
                    <li className="slide-in-rest">
                        <NavLink className={activeNav} to={routes.contact} onClick={() => setOpenNav(false)}>
                            contact us
                        </NavLink>
                    </li>
                    {user ? (
                        <>
                            <li className="slide-in-rest">
                                <NavLink
                                    className={activeNav}
                                    to={routes.notifications}
                                    onClick={() => setOpenNav(false)}
                                >
                                    notifications
                                </NavLink>
                            </li>
                            <li className="slide-in-rest">
                                <NavLink
                                    className={activeNav}
                                    to={routes.dashboard.home}
                                    onClick={() => setOpenNav(false)}
                                >
                                    dashboard
                                </NavLink>
                            </li>
                            <li className="slide-in-rest">
                                <button
                                    type="button"
                                    className="sign-up"
                                    onClick={() => {
                                        setOpenNav(false);
                                        signout();
                                    }}
                                >
                                    sign out
                                </button>
                            </li>
                        </>
                    ) : (
                        <>
                            <li className="slide-in-rest">
                                <NavLink
                                    className={(props) => activeNav(props, "sign-in")}
                                    to={routes.signIn}
                                    onClick={() => setOpenNav(false)}
                                >
                                    sign in
                                </NavLink>
                            </li>
                            <li className="slide-in-rest">
                                <NavLink
                                    className={(props) => activeNav(props, "sign-up")}
                                    to={routes.signUp}
                                    onClick={() => setOpenNav(false)}
                                >
                                    sign up
                                </NavLink>
                            </li>
                        </>
                    )}

                    <button className="theme-toggle slide-in-rest" onClick={toggleTheme}></button>
                </ul>
            </nav>
            <div className="hamburger-menu slide-in-rest" onClick={() => setOpenNav((prev) => !prev)}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
        </header>
    );
}

export default Header;

function activeNav({ isActive }: { isActive: boolean }, extras?: string) {
    return isActive ? `active ${extras}` : extras;
}
