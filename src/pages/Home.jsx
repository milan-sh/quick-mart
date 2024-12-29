import React from "react";
import { Filter, HeadingCard, Nav, SearchInput, Sliders } from "../components";

// import Swiper core and required modules
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { category } from "./category";

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
      <div className="p-4">
        <HeadingCard category="Shop by categories" link="See all categories" />
      </div>
      <div className="m-4 flex items-center justify-between overflow-auto rounded-lg">
        {category.map((item) => (
          <button
            key={item.id}
            className="flex flex-col justify-between items-center gap-y-3 p-2 hover:border hover:border-gray-300 rounded-lg"
          >
            <div className="p-2 bg-gray-300 rounded-lg">
              <img
                className="md:h-20 h-40 md:min-w-full min-w-48 object-cover rounded-md"
                src={`/category-images/${item.src}`}
                alt=""
              />
            </div>
            <h3 className="text-secondaryBgColor font-medium">{item.name}</h3>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;
