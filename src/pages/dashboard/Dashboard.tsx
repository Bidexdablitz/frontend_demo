import * as React from "react";
import { Outlet } from "react-router-dom";
import { useAnimateIn, useLoadingAnimation } from "utilities/customHooks";
import DashboardHeader from "./components/dashboard_header/DashboardHeader";
import Sidebar from "./components/side_bar/SideBar";
import "./dashboard.scss";

function Dashboard() {
    useAnimateIn(".slide-in-rest", { threshold: 0.7 });
    useLoadingAnimation();

    return (
        <section className="dashboard">
            <Sidebar />
            <div className="main-section">
                <DashboardHeader />
                <Outlet />
            </div>
        </section>
    );
}

export default Dashboard;
