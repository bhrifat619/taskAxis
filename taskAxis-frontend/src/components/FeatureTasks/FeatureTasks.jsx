import React from "react";

import {Swiper, SwiperSlide} from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import {Autoplay} from "swiper/modules";
import FeatureTask from "./FeatureTask";
import { useLoaderData } from "react-router";

const FeatureTasks = () => {
  const tasks = useLoaderData();
  return (
    <div className="mt-10">
      <h1 className="py-3 text-3xl font-bold font-heading">Feature Tasks</h1>
      <div>
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          spaceBetween={30}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper py-4 "
        >
          {tasks &&
            tasks?.map((task) => (
              <SwiperSlide className="py-4" key={task.id}>
                <FeatureTask task={task}></FeatureTask>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FeatureTasks;
