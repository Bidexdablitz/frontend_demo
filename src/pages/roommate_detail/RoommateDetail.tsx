import Axios from "axiosInstance";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { useAnimateIn, useImageLazyLoad } from "utilities/customHooks";
import { LoaderFunction, redirect, useLoaderData } from "react-router-dom";
import { api } from "utilities/globalVariables";
import { handle401UnauthorizedInLoader } from "utilities/errorHandlers";
import { User } from "utilities/typeDefs";
import { routes } from "router";
import { getLocalUser, makeSearch } from "utilities/helperFunctions";
import "./roommate-detail.scss";

export const loader: LoaderFunction = async ({ params }) => {
    const username = params.username;
    const user = getLocalUser();
    if (!user) {
        const params = {
            next: `${routes.roommate}/${username}`,
            message: "Please signin to continue",
        };
        return redirect(`${routes.signIn}/${makeSearch(params)}`);
    }
    if (!user.roommate_request) {
        const params = {
            next: `${routes.roommate}/${username}`,
            message: "You have to submit a roommate request to access this page",
        };
        return redirect(`${routes.roommateOnboarding.index}/${makeSearch(params)}`);
    }
    let roommate;
    await Axios.get(`${api.roommate}/${username}`)
        .then(({ data }) => (roommate = data))
        .catch(async (err) => {
            switch (err.response.status) {
                case 401:
                    await handle401UnauthorizedInLoader(err)
                        .then((data) => (roommate = data))
                        .catch(() => (roommate = null));
                    break;
            }
        });
    return roommate;
};

function RoommateDetail() {
    useAnimateIn();
    let roommate = useLoaderData() as User;
    useImageLazyLoad([], { threshold: 0.8 });

    return (
        <section className="roommate-detail">
            <Swiper
                slidesPerView={1}
                spaceBetween={0}
                loop={false}
                pagination={{
                    clickable: true,
                }}
                mousewheel={true}
                grabCursor={true}
                navigation={true}
                modules={[Navigation]}
                className="swiper"
            >
                {roommate.pictures.map((picture, i) => (
                    <SwiperSlide key={i} className="loading">
                        <img
                            className="lazy-load-image"
                            data-blurhash={picture.blurhash}
                            data-original-image={picture.image}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            <section className="user-details">
                <h1 className="heading slide-in-rest">
                    {roommate.first_name} {roommate.last_name}
                </h1>
                <p className="slide-in-rest">
                    <span className="label">School:</span> {roommate.school.abbreviation}
                </p>
                <p className="slide-in-rest">
                    <span className="label">Level:</span> {roommate.level}L
                </p>
                <p className="slide-in-rest">
                    <span className="label">Age:</span> {roommate.age}
                </p>
                <p className="slide-in-rest">
                    <span className="label">Department:</span> {roommate.department}
                </p>
                <p className="slide-in-rest">
                    <span className="label">Religion:</span> {roommate.religion}
                </p>
                <p className="slide-in-rest">
                    <span className="label">Smokes:</span> {roommate.roommate_request?.smokes ? "Yes" : "No"}
                </p>
                <p className="slide-in-rest">
                    <span className="label">Alchol:</span> {roommate.roommate_request?.drinks ? "Yes" : "No"}
                </p>
                <p className="slide-in-rest">
                    <span className="label">Pets:</span> {roommate.roommate_request?.pets}
                </p>
                <p className="slide-in-rest">
                    <span className="label">Hostel Price Range:</span>{" "}
                    {roommate.roommate_request?.hostel_price}
                </p>
                <div className="nav-buttons slide-in-rest">
                    <button>make request</button>
                    <button className="next">next</button>
                </div>
            </section>
        </section>
    );
}

export default RoommateDetail;
