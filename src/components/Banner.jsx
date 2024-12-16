import React from "react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import "swiper/css/scrollbar";

const Banner = () => {
  return (
    <div className="bg-white m-4">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        autoplay={true}
        pagination={{ clickable: true }}
        className="flex justify-center items-center h-[30vh]"
        style={{
            '--swiper-navigation-color': '#ff5722',
            '--swiper-pagination-color': '#ff5722',

          }}
        
      >
        <SwiperSlide><img className="m-auto min-w-full h-full object-cover" src="/banners/1.png" alt="Banner 1" /></SwiperSlide>
        <SwiperSlide><img className="m-auto min-w-full h-full object-cover" src="/banners/2.png" alt="Banner 2" /></SwiperSlide>
        <SwiperSlide><img className="m-auto min-w-full h-full object-cover" src="/banners/3.png" alt="Banner 3" /></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
