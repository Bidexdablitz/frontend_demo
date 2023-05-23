import * as React from "react";
import img from "assets/images/close-up-shot-touched-pleased-happy-dark-skinned-girl-with-afro-hairstyle-glasses-striped-blouse-holding-hands-chest-smiling-broadly-being-pleased-receiving-compliments.jpg";
import "./person.scss";

type Props = {
    name: string;
    school: string;
    state: string;
    mutual?: number;
};
function Person({ name, school, state, mutual }: Props) {
    return (
        <div className="dashboard-person">
            <img src={img} alt="" />
            <div className="content">
                <div className="name-wrapper">
                    <p className="name">{name}</p>
                    <p className="location">
                        {school}, <span>{state}</span>
                    </p>
                </div>
                <div className="mutual">{mutual} mutual(s)</div>
            </div>
        </div>
    );
}

export default Person;
