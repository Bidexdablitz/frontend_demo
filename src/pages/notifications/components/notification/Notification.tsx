import * as React from "react";
import { routes } from "router";
import { Link } from "react-router-dom";
import "./notification.scss";

type Props = {
    id: string;
    title: string;
    displayText: string;
};
function Notification({ id, title, displayText }: Props) {
    return (
        <Link to={`${routes.notifications}/${id}`} className="single-notification">
            <div className="notification-icon"></div>
            <div className="title-wrapper">
                <p className="title">{title}</p>
                <p className="display-text">{displayText}</p>
            </div>
            <div className="ellipse"></div>
        </Link>
    );
}

export default Notification;
