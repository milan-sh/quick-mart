import React, { useEffect, useState } from "react";
import axios from "axios";

const Hero = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const API_URL = "https://dummyjson.com/products?limit=90";
      try {
        const response = await axios.get(API_URL);
        setData(response.data.products);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="bg-white md:p-4 p-2 m-4 flex flex-wrap md:gap-8 gap-4 items-center justify-evenly">
      {data &&
        data.map((item) => (
          <div
            key={item.id}
            className="md:shadow-custom border border-secondaryText w-[40vw] md:w-[25vw] h-auto lg:w-fit md:p-4 p-2 rounded-md flex flex-col md:items-center md:gap-y-3 gap-y-1"
          >
            <img className="h-auto w-full mb-1" src={item.thumbnail} alt="" />
            <h3 className="text-sm font-semibold md:text-base">{item.title}</h3>
            <div>
              <div className="flex items-center gap-x-2">
                <div className="bg-border text-white px-2 py-[2px] rounded-md text-xs md:text-base">
                  <p className="flex items-center gap-x-1">
                    {item.rating.toFixed(1)}{" "}
                    <span>
                      <img className="h-3 invert" src="/rating.png" alt="" />
                    </span>
                  </p>
                </div>
                <p className="text-gray-500 font-semibold text-xs md:text-base">
                  ({item.reviews.length})
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between md:items-center gap-x-3">
              <div className="flex md:justify-center items-center gap-x-3">
                <p className="font-semibold md:text-lg text-pirmaryText">
                  ₹{Math.round(item.price * 80)}
                </p>
                <p className="text-gray-500 line-through md:text-base text-sm">
                  ₹
                  {Math.round(
                    item.price * 80 * (1 + item.discountPercentage / 100)
                  )}
                </p>
              </div>
              <p className="text-rating text-sm">
                {Math.floor(item.discountPercentage)}% off
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Hero;
