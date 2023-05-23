import * as React from "react";
import "./roommate-entry.scss";
import { Link } from "react-router-dom";
import { routes } from "router";
import { User } from "utilities/typeDefs";

type Props = {
    roommate: User;
};

const RoommateEntry = React.forwardRef(({ roommate }: Props, ref: any) => {
    return (
        <Link ref={ref} to={`${routes.roommate}/${roommate.username}`} className="roommate-entry">
            <div className="img-wrapper loading">
                <img
                    className="lazy-load-image"
                    data-blurhash={roommate.pictures[0]?.blurhash}
                    data-original-image={roommate.pictures[0]?.image}
                />
            </div>
            <div className="text-wrapper">
                <p>
                    {roommate.first_name} {roommate.last_name}
                </p>
                <p>
                    <span className="bold">School:</span> {roommate.school?.abbreviation}
                </p>
                <p>
                    <span className="bold">Level:</span> {roommate.level}
                </p>
                <p>
                    <span className="bold">Age:</span> {roommate.age}
                </p>
            </div>
        </Link>
    );
});

export default RoommateEntry;
