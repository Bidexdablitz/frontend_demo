import React, { useState } from "react";
import "./universities.scss";
import { useStateSchools } from "utilities/customHooks";

function Universities() {
    const [search, setSearch] = useState("");
    const schools = useStateSchools().schools;

    function handleSearch(e: any) {
        setSearch(e.target.value);
    }

    return (
        <section className="universities wavy-bg">
            <h2 className="heading slide-in-rest">universities on studentrealestate</h2>
            <div className="university-list slide-in-rest">
                {schools
                    .filter((school) => school.name.toLocaleLowerCase().includes(search.toLowerCase()))
                    .slice(0, 10)
                    .map((school, index) => (
                        <p key={index} className="university">
                            {school.name}
                        </p>
                    ))}
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

export default Universities;
