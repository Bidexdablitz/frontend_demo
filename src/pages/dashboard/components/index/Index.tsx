import * as React from "react";
import bluePerson from "assets/images/icons/blue-add-person-icon.svg";
import orangePerson from "assets/images/icons/orange-add-person-icon.svg";
import yelowPerson from "assets/images/icons/yellow-check-person-icon.svg";
import greenPeople from "assets/images/icons/green-people-icon.svg";
import "./index.scss";
import FriendsList from "../friends_list/FriendsList";
import RoommatesList from "../roommates_list/RoommatesList";

function DashboardIndex() {
    const currentDate = new Date().getFullYear();

    return (
        <section className="dashboard-index">
            <section className="main">
                <article>
                    <img src={bluePerson} />
                    <h2>total friend request recieved</h2>
                    <p className="count">0</p>
                    <p className="des">
                        This is the number of all the post you have submitted and have been approved.
                    </p>
                </article>
                <article>
                    <img src={bluePerson} />
                    <h2>total friend request recieved</h2>
                    <p className="count">0</p>
                    <p className="des">
                        This is the number of all the post you have submitted and have been approved.
                    </p>
                </article>
                <article>
                    <img src={bluePerson} />
                    <h2>total friend request recieved</h2>
                    <p className="count">0</p>
                    <p className="des">
                        This is the number of all the post you have submitted and have been approved.
                    </p>
                </article>
                <article>
                    <img src={bluePerson} />
                    <h2>total friend request recieved</h2>
                    <p className="count">0</p>
                    <p className="des">
                        This is the number of all the post you have submitted and have been approved.
                    </p>
                </article>
                <article>
                    <h2>take a step!</h2>
                    <p className="">Start your journey</p>
                    <ul>
                        <li>Get a roomie</li>
                        <li>Make easy money</li>
                    </ul>
                </article>
            </section>
            <section className="friends-roommates-wrapper">
                <FriendsList />
                <RoommatesList />
                <section className="give-a-review">
                    <h2>give a review</h2>
                    <div className="input-wrapper">
                        <label htmlFor="review">Your review</label>
                        <textarea name="review" id="review"></textarea>
                    </div>
                </section>
            </section>
            <section className="referral">
                <h2>referral link</h2>
                <div className="input-wrapper">
                    <label htmlFor="referral-link">referral link</label>
                    <input type="text" id="referral-link" />
                    <div className="button-wrapper">
                        <button className="copy-link">copy</button>
                    </div>
                </div>
            </section>
            <p className="copyright slide-in-rest">&#169; {currentDate} Studentrealestates inc. </p>
        </section>
    );
}

export default DashboardIndex;
