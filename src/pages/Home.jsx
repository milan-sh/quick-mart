import React from "react";
import { Filter, Nav, SearchInput, Sliders } from "../components";

// import Swiper core and required modules
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Home = () => {
  return (
    <div className="min-h-screen bg-primaryBgColor">
      <Nav />
      <Filter />
      <div className="w-[90%] m-auto mb-4 block md:hidden">
        <SearchInput />
      </div>
      <div className="m-4 rounded-lg h-[40vh] md:h-auto">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          pagination={{ clickable: true }}
          className="h-full"
        >
          <SwiperSlide>
            <Sliders
              url="slider.webp"
              category="ELECTRONICS"
              discount="Buy and get 10% off on selected itmes"
              button="Shop Now"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Sliders
              url="slider_1.webp"
              category="COSMETIC"
              discount="Buy and get 40% off on selected itmes"
              button="Shop Now"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Sliders
              url="slider_3.webp"
              category="HOUSEHOLD"
              discount="Decor Your Home Today"
              button="Shop Now"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Home;
