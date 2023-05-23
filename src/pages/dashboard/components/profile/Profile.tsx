import * as React from "react";
import { maxDate, minDate } from "utilities/globalVariables";
import bluePerson from "assets/images/icons/blue-add-person-icon.svg";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./profile.scss";

function Profile() {
    const dateRef = React.useRef(null);
    const [editing, setEditing] = React.useState(false);
    const currentDate = new Date().getFullYear();

    return (
        <section className="dashboard-profile ">
            <form autoComplete="false" className={editing ? "editing" : ""}>
                <label
                    htmlFor="profile-image"
                    onClick={(e) => {
                        if (editing) return;
                        e.preventDefault();
                    }}
                >
                    <img src={bluePerson} alt="" />
                    <input type="file" name="profile_image" id="profile-image" />
                </label>

                <div className="input-wrapper name">
                    <label htmlFor="firstname"> first name</label>
                    <input type="text" id="firstname" placeholder="first name" />
                </div>
                <div className="input-wrapper name">
                    <label htmlFor="lastname"> last name</label>
                    <input type="text" id="lastname" placeholder="last name" />
                </div>
                <div className="input-wrapper name">
                    <label htmlFor="username">username </label>
                    <input type="text" id="username" placeholder="your username name" />
                </div>
                <div className="input-wrapper email">
                    <label htmlFor="email">email address</label>
                    <input type="email" id="email" placeholder="your email address" />
                </div>

                <div className="input-wrapper select">
                    <label htmlFor="state">state</label>
                    <select name="state" id="state"></select>
                </div>
                <div className="input-wrapper select">
                    <label htmlFor="school">school</label>
                    <select name="school" id="school"></select>
                </div>
                <div className="input-wrapper phone">
                    <label htmlFor="phone">phone number</label>
                    <input type="tel" id="tel" placeholder="your phone number" />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="date_of_birth">date of birth</label>
                    <DatePicker
                        placeholderText="Your date of birth"
                        className="date_of_birth"
                        name="date_of_birth"
                        id="date_of_birth"
                        maxDate={maxDate}
                        minDate={minDate}
                        onChange={(date) => null}
                        selected={null}
                        dateFormat="d MMMM, yyyy"
                    />
                </div>

                <div className="buttons">
                    <button
                        type="button"
                        className="edit"
                        onClick={() => {
                            setEditing((p) => !p);
                        }}
                    >
                        edit profile
                    </button>
                    {editing && (
                        <button type="submit" className="save">
                            save profile
                        </button>
                    )}
                </div>
            </form>
            <p className="copyright slide-in-rest">&#169; {currentDate} Studentrealestates inc. </p>
        </section>
    );
}

export default Profile;
