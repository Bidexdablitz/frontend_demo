import * as React from "react";
import Person from "../person/Person";

function FriendsList() {
    const peeps = [
        {
            name: "john doe really long name",
            school: "Eksu",
            state: "Lagos",
            mutual: 0,
        },
        {
            name: "john doe",
            school: "Eksu",
            state: "Lagos",
            mutual: 0,
        },
        {
            name: "john doe",
            school: "Eksu",
            state: "Lagos",
            mutual: 0,
        },
    ];
    return (
        <section className="friends-list">
            <h2>friends</h2>
            {peeps.map((peep, i) => (
                <Person key={i} {...peep} />
            ))}
        </section>
    );
}

export default FriendsList;
