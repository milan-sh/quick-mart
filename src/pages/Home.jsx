import React, { useEffect, useState } from "react";
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
import axios from "axios";
import { rating } from "./rating";

const Home = () => {
  const [data, setData] = useState(null);

  const API_URL = "https://dummyjson.com/products?limit=90";
  useEffect(() => {
    async function fetchProduts() {
      try {
        const response = await axios.get(API_URL);
        setData(response.data.products);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProduts();
  }, []);

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
      <div className="p-4 bg-gray-200">
        <HeadingCard category="Explore Products" className="bg-white" />
        <div className="my-4 grid md:grid-cols-5 grid-cols-2 gap-4 flex-wrap">
          {data &&
            data.map((item) => (
              <div key={item.id} className="bg-white rounded-lg">
                <img
                  className="border-0 rounded-t-lg"
                  src={item.thumbnail}
                  alt={item.title}
                />
                <div className="p-4 ">
                  <h3 className="md:hidden md:text-xl text-lg font-medium mb-2 text-wrap h-14 leading-5">
                    {item.title.slice(0, 32)}
                  </h3>
                  <h3 className="hidden md:block md:text-xl text-base font-medium mb-2 text-wrap h-14">
                    {item.title.slice(0, 35)}
                  </h3>
                  <p className="font-semibold text-lg mb-2">
                    Rs. {Math.round(Number(item.price) * 85.49)}.00
                  </p>
                  <div className="h-1 min-w-full bg-gray-200 rounded-full">
                    <div
                      className="min-h-full bg-green rounded-full"
                      style={{ width: `${item.stock}%` }}
                    ></div>
                  </div>
                  <p className="text-green font-medium text-base">
                    {item.stock} in stock
                  </p>
                  <button className="bg-primaryButtonColor text-white py-2 rounded-md mt-4 font-medium min-w-full cursor-pointer hover:bg-secondaryBgColor">
                    Add To Cart
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="p-4 bg-gray-200">
        <HeadingCard category="Loved by customers" className="bg-white" />
        <div className="grid md:grid-cols-4 grid-cols-2 gap-2 py-6">
          {rating.map(
            (user) => (
              <div key={user.id} className="card shadow-xl bg-white pt-4">
                <p className="flex md:flex-row flex-col justify-center items-center">
                  <span className="text-2xl text-orange-400 mr-2">
                    {user.stars.map((star) => star)}
                  </span>
                  {user.rating} | 5 Reviews
                </p>
                <p className="text-center mt-2">{user.review}</p>
                <img
                  src={`/reviewers/${user.imageName}`}
                  alt={`/reviewers/${user.imageName}`}
                  className="rounded-full h-14 w-14 object-cover mx-auto mt-2  hover:scale-110 transition duration-700 ease-in-out"
                />
                <div className="flex flex-col items-center p-4 text-center">
                  <h2 className="card-title m-0">{user.name}</h2>
                  <p className="font-medium">{user.role}</p>
                  <div className="card-actions"></div>
                </div>
              </div>
            ),
            []
          )}
        </div>
      </div>
      <div className="bg-white p-4">
        <HeadingCard category="FAQs" />
        <div className="collapse collapse-plus bg-base-200 py-4">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title text-xl font-medium">
          Q: What are your delivery hours?
          </div>
          <div className="collapse-content">
            <p>A: Quick Mart offers delivery from 8:00 AM to 10:00 PM daily. You can choose a delivery time slot that suits you during checkout.</p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
          Q: Is there a minimum order value for free delivery?
          </div>
          <div className="collapse-content">
            <p>A: Yes, free delivery is available for orders above $50. For orders below this amount, a small delivery fee will apply.</p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
          Q: Can I return or exchange items?
          </div>
          <div className="collapse-content">
            <p>A: Yes, Quick Mart accepts returns or exchanges within 7 days of delivery, provided the items are in their original packaging and condition. Please contact our support team for assistance.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
