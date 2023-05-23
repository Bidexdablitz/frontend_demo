import { useContext, useState } from "react";
import { redirect } from "react-router-dom";
import { routes } from "router";
import { userContext } from "utilities/contextDefinitions";
import { useAnimateIn, useImageLazyLoad, useInfiniteScroll, useUrlMessage } from "utilities/customHooks";
import { api } from "utilities/globalVariables";
import { getLocalUser, makeSearch } from "utilities/helperFunctions";
import RoommateEntry from "./components/roommate_entry/RoommateEntry";
import "./roommate.scss";

export async function loader() {
    const user = getLocalUser();
    // redirect if user is not logged in
    if (!user) {
        const params = { next: routes.roommate, message: "Please login to continue to find a roommate" };
        return redirect(`${routes.signIn}/${makeSearch(params)}`);
    }
    // user is logged in but no roommate request
    if (!user.roommate_request) {
        const params = {
            next: routes.roommate,
            message: "You have to submit a roommate request to access this page",
        };
        return redirect(`${routes.roommateOnboarding.index}/${makeSearch(params)}`);
    }
    if (!user.pictures.length) {
        const params = {
            next: routes.roommate,
            message: "Upload atleast one photo of yourself to continue",
        };
        return redirect(`${routes.uploadImage}/${makeSearch(params)}`);
    }
    return null;
}

function Roommate() {
    const { user } = useContext(userContext);
    const {
        resultList: roommates,
        lastElementRef: lastRoommateRef,
        noMoreResults: noMoreRoommates,
    } = useInfiniteScroll(api.roommate);
    useImageLazyLoad([roommates]);
    useAnimateIn(".slide-in-rest", { threshold: 0.7 }, [noMoreRoommates, roommates]);
    return (
        <section className="roommate-page">
            <h1 className="heading">get a roomie</h1>
            <p className="sub-heading">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, amet!
            </p>
            <section className="roommates">
                {roommates &&
                    roommates.map((roommate: any, i: number) => {
                        if (roommate.username === user?.username) return;
                        if (roommates.length === i + 2) {
                            return (
                                <RoommateEntry
                                    ref={lastRoommateRef}
                                    key={roommate.username}
                                    roommate={roommate}
                                />
                            );
                        } else {
                            return <RoommateEntry key={roommate.username} roommate={roommate} />;
                        }
                    })}
            </section>
            {noMoreRoommates && <p className="no-more-items slide-in-rest">No more roommates</p>}
        </section>
    );
}

export default Roommate;
