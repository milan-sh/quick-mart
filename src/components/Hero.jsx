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
    <div className="bg-white p-4 m-4 flex flex-wrap gap-8 items-center justify-center">
      {data &&
        data.map((item) => (
          <div
            key={item.id}
            className="shadow-custom w-fit p-4 rounded-md flex flex-col items-center gap-y-3    "
          >
            <img className="h-60" src={item.thumbnail} alt="" />
            <h3>{item.title}</h3>
            <div>
              <div className="flex items-center gap-x-2">
                <div className="bg-border text-white px-2 py-[2px] rounded-md text-sm">
                  <p className="flex items-center gap-x-1">
                    {item.rating.toFixed(1)}{" "}
                    <span>
                      <img className="h-3 invert" src="/rating.png" alt="" />
                    </span>
                  </p>
                </div>
                <p className="text-gray-500 font-semibold">
                  ({item.reviews.length})
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center gap-x-3">
              <p className="font-semibold text-lg text-pirmaryText">
                ₹{Math.round(item.price * 80)}
              </p>
              <p className="text-gray-500 line-through">
                ₹
                {Math.round(
                  item.price * 80 * (1 + item.discountPercentage / 100)
                )}
              </p>
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
