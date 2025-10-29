import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import img1 from "../../assets/banner1.jpeg";
import img2 from "../../assets/banner-2.jpg";

import img5 from "../../assets/banner-5.png";
import img6 from "../../assets/banner-6.png";
import img7 from "../../assets/banner-7.png";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Autoplay, Navigation} from "swiper/modules";

const Slider = () => {
  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={30}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="rounded-lg border border-accent"
      >
        <SwiperSlide>
          <img
            className="w-full  h-60 md:h-150 object-cover cursor-pointer rounded-lg"
            src={img1}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-60 md:h-150 object-cover cursor-pointer rounded-lg"
            src={img5}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-60 md:h-150 object-cover cursor-pointer rounded-lg"
            src={img7}
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="w-full h-60 md:h-150 object-cover cursor-pointer rounded-lg"
            src={img2}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-60 md:h-150 object-cover cursor-pointer rounded-lg"
            src={img6}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
