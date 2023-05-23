import * as React from "react";
import { useAnimateIn } from "utilities/customHooks";
import FriendEntry from "./components/friend_entry/FriendEntry";
import "pages/roommate/roommate.scss";

function Friend() {
    useAnimateIn(".slide-in-rest", { threshold: 0.7 });
    const friends = [
        { name: "bamidele damilola", age: 33 },
        { name: "bamidele damilola", age: 33 },
        { name: "bamidele damilola", age: 33 },
        { name: "bamidele damilola", age: 33 },
        { name: "bamidele damilola", age: 33 },
        { name: "bamidele damilola", age: 33 },
        { name: "bamidele damilola", age: 33 },
        { name: "bamidele damilola", age: 33 },
        { name: "bamidele damilola", age: 33 },
        { name: "bamidele damilola", age: 33 },
    ];
    useAnimateIn(".slide-in-rest", { threshold: 0.7 });
    return (
        <section className="friend-page">
            <h1 className="heading">get a friend</h1>
            <p className="sub-heading">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, amet!
            </p>
            <section className="friends">
                {friends.map((friend, i) => (
                    <FriendEntry key={i} {...friend} />
                ))}
            </section>
        </section>
    );
}

export default Friend;
