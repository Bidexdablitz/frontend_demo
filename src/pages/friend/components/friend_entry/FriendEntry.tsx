import * as React from "react";
import img from "assets/images/close-up-shot-touched-pleased-happy-dark-skinned-girl-with-afro-hairstyle-glasses-striped-blouse-holding-hands-chest-smiling-broadly-being-pleased-receiving-compliments.jpg";
import "pages/roommate/components/roommate_entry/roommate-entry.scss";
import { Link } from "react-router-dom";
import { routes } from "router";

type Props = {
    name: string;
    age: number;
};
function FriendEntry(props: Props) {
    return (
        <Link to={routes.friend} className="roommate-entry">
            <div className="img-wrapper">
                <img src={img} alt="" />
            </div>
            <div className="text-wrapper">
                <p>{props.name}</p>
                <p>
                    <span className="bold">Name:</span>
                    {props.name}
                </p>
                <p>
                    <span className="bold">Name:</span>
                    {props.name}
                </p>
                <p>
                    <span className="bold">Name:</span>
                    {props.name}
                </p>
            </div>
        </Link>
    );
}

export default FriendEntry;
