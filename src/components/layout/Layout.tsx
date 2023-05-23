import React, { useEffect, useState } from "react";
import Header from "components/header/Header";
import { Outlet, ScrollRestoration, useNavigation } from "react-router-dom";
import { useLoadingAnimation } from "utilities/customHooks";

function Layout() {
    useLoadingAnimation();

    return (
        <>
            <Header />
            <Outlet />
            <ScrollRestoration />
        </>
    );
}

export default Layout;
