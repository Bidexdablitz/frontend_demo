import * as React from "react";
import { useNavigate } from "react-router-dom";
import "./notification-detail.scss";

function NotificationDetail() {
    const navigate = useNavigate();
    return (
        <section className="notification-detail">
            <button className="go-back" onClick={() => navigate(-1)} />
            detail
        </section>
    );
}

export default NotificationDetail;
