import { lazy, useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import router from "router";
import { themes } from "utilities/globalVariables";
import { themeContext, userContext, schoolContext } from "utilities/contextDefinitions";
import { useSchools, useStateLocal } from "utilities/customHooks";
import "App.scss";
import "components/page_loading/page-loading.scss";
import Alert from "components/alert/Alert";
import { School } from "utilities/typeDefs";

function App() {
    const [theme, setTheme] = useStateLocal(
        "theme",
        window.matchMedia("(prefers-color-scheme: dark)").matches ? themes.dark : themes.light
    ); // set the website theme
    const [user, setUser] = useStateLocal("user");
    const schools = useSchools();
    // scroll to top on mount
    useEffect(() => {
        setTimeout(() => window.scrollTo(0, 0), 0);
    }, []);

    return (
        <main className={`App ${theme}`}>
            <div className="loading">
                <div className="top-loading-strip" />
                <Alert />
                <userContext.Provider value={{ user, setUser }}>
                    <themeContext.Provider value={{ theme, setTheme }}>
                        <schoolContext.Provider value={schools}>
                            <RouterProvider router={router}></RouterProvider>
                        </schoolContext.Provider>
                    </themeContext.Provider>
                </userContext.Provider>
            </div>
        </main>
    );
}

export default App;
