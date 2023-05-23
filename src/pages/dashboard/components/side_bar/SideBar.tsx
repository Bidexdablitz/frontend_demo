import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import { routes } from "router";
import "./side-bar.scss";
import companyLogo from "assets/images/company-logo.png";

function Sidebar() {
    const navigate = useNavigate();

    return (
        <section className="side-bar">
            <img src={companyLogo} className="company-logo" />
            <button className="go-back" onClick={() => navigate(-1)}>
                back
            </button>
            <section className="about-user">
                <img src={companyLogo} className="user-pic" />
                <h2 className="users-name">john doe</h2>
                <p className="location">eksu, ekiti</p>
                <div className="roommates-count">0</div>
                <div className="friends-count">2</div>
            </section>
            <section className="extra">
                <h3>hey, david</h3>
                <p>Here is complex overview of your progress</p>
            </section>
            <Link to={routes.index} className="go-home">
                home
            </Link>
        </section>
    );
}

export default Sidebar;
