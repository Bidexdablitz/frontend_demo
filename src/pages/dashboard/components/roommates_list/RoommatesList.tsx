import * as React from "react";
import Person from "../person/Person";
function RoommatesList() {
    const peeps = [
        {
            name: "john doe",
            school: "Eksu",
            state: "Lagos",
            mutual: 0,
        },
    ];
    return (
        <section className="roommates-list">
            <h2>roommates</h2>
            {peeps.map((peep, i) => (
                <Person key={i} {...peep} />
            ))}
        </section>
    );
}

export default RoommatesList;
