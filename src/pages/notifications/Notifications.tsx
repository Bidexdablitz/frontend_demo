import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useAnimateIn, useLoadingAnimation } from "utilities/customHooks";
import Notification from "./components/notification/Notification";
import "./notifications.scss";

function Notifications() {
    useAnimateIn(".slide-in-rest", { threshold: 0.7 });
    useLoadingAnimation();
    const navigate = useNavigate();

    const notifications = [
        {
            id: "33",
            title: "this is a notification title",
            displayText: "hi there i am in primary three B",
        },
        {
            id: "33",
            title: "this is a notification title",
            displayText: "hi there i am in primary three B",
        },
        {
            id: "33",
            title: "this is a notification title",
            displayText: "hi there i am in primary three B",
        },
    ];
    return (
        <section className="notifications">
            <button className="go-back" onClick={() => navigate(-1)} />
            {notifications.map((notification, i) => (
                <Notification key={i} {...notification} />
            ))}
        </section>
    );
}

export default Notifications;
