import * as React from "react";
import { FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "./image-slider.scss";
import img1 from "assets/images/image-swiper/african-american-men-white-t-shirts.jpg";
import img2 from "assets/images/image-swiper/full-shot-smiley-men-sitting-curb.jpg";

function ImageSlider() {
    const images = [img1, img2, img1, img2, img1, img2];
    return (
        <section className="image-slider slide-in-rest">
            <Swiper
                slidesPerView={"auto"}
                spaceBetween={1}
                freeMode={true}
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                }}
                modules={[FreeMode, Pagination]}
                mousewheel={true}
                className="mySwiper"
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img src={image} className="slider-image" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}

export default ImageSlider;

// import * as React from "react";
// import "./image-slider.scss";
// import img1 from "assets/images/image-swiper/african-american-men-white-t-shirts.jpg";
// import img2 from "assets/images/image-swiper/full-shot-smiley-men-sitting-curb.jpg";

// function ImageSlider() {
//     const images = [img1, img2, img1, img2, img1, img2];
//     return (
//         <section className="image-slider">
//             <div className="slider">
//                 {images.map((image, index) => (
//                     <img src={image} className="slider-image" />
//                 ))}
//             </div>
//         </section>
//     );
// }

// export default ImageSlider;
