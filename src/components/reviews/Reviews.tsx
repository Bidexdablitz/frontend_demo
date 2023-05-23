import * as React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "./reviews.scss";
import img from "assets/images/group-happy-teenagers-taking-selfie.jpg";
import Spinner from "components/spinner/Spinner";

type Review = {
    name: string;
    school: string;
    text: string;
    title: string;
    about: string;
};

function Reviews() {
    const [reviews, setReviews] = React.useState<Review[]>([]);
    const [isPending, startTransition] = React.useTransition();
    React.useEffect(() => {
        startTransition(() => {
            setReviews(getReviews());
        });
    }, []);

    return (
        <section className="reviews">
            <h2 className="heading slide-in-rest">Check Out Our Recent Reviews</h2>
            <p className="sub-heading slide-in-rest">
                At Studentrealestate we major in two things, which are...
            </p>
            <div className="slider-wrapper slide-in-rest">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Navigation, Autoplay]}
                    className="mySwiper"
                >
                    {isPending ? (
                        <Spinner />
                    ) : (
                        reviews.map((review, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <article className="review">
                                        <h3 className="title">Found A Roommate</h3>
                                        <p className="text">
                                            “A wonderful serenity has taken possession of my entire soul, like
                                            these sweet mornings of spring which I enjoy with my whole heart.A
                                            wonderful serenity has taken possession of my entire soul, like
                                            these sweet mornings of spring which.”
                                        </p>
                                        <div className="person">
                                            <img src={img} className="profile-pic" />
                                            <p className="name">John Doe</p>
                                            <p className="about">
                                                Chemistry student <span className="school">eksu</span>
                                            </p>
                                        </div>
                                    </article>
                                </SwiperSlide>
                            );
                        })
                    )}
                </Swiper>
            </div>
        </section>
    );
}

function getReviews(): Review[] {
    return [
        {
            name: "john doe",
            school: "eksu",
            text: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which.",
            title: "Found A Roommate",
            about: "Chemistry student",
        },
    ];
}
export default Reviews;
