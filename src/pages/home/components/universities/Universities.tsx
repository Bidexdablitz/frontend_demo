import Spinner from "components/spinner/Spinner";
import React, { useEffect, useState, useTransition } from "react";
import "./universities.scss";

function Universities() {
    const [search, setSearch] = useState("");
    const [universities, setUniversities] = useState<string[]>([]);
    const [fetchingUni, startUniFetchTransition] = useTransition();

    function handleSearch(e: any) {
        setSearch(e.target.value);
    }

    useEffect(() => {
        startUniFetchTransition(() => {
            setUniversities(getUniversities());
        });
    }, []);

    return (
        <section className="universities wavy-bg">
            <h2 className="heading slide-in-rest">universities on studentrealestate</h2>
            <div className="university-list slide-in-rest">
                {fetchingUni ? (
                    <Spinner />
                ) : (
                    universities
                        .filter((university) => university.includes(search.toLowerCase()))
                        .map((university, index) => (
                            <p key={index} className="university">
                                {university}
                            </p>
                        ))
                )}
            </div>
            <div className="input-wrapper slide-in-rest">
                <input
                    type="text"
                    className="search"
                    placeholder="search for university"
                    onKeyUp={handleSearch}
                />
            </div>
        </section>
    );
}

function getUniversities() {
    return [
        "university of lagos",
        "university of ekiti",
        "university of jos",
        "university of nowhere land",
        "university of ripple effect",
        "university of yam",
    ];
}

export default Universities;
