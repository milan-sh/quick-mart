import React, { useEffect, useState } from "react";
import { Button } from "../components/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faBoltLightning,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const Products = () => {
  const [item, setItem] = useState({});

  useEffect(() => {
    const product = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products/78");
        setItem(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    product();
  }, []);
  return (
    <div className="m-4 p-2 bg-white flex items-start">
      <div></div>
      <div>
        <img
          className="h-[70vh] py-2 m-auto mb-2"
          src={`${item.thumbnail}`}
          alt=""
        />
        <div className="grid grid-cols-2 gap-x-3 w-[40vw] mr-2">
          <Button bgColor="bg-button">
            <FontAwesomeIcon icon={faCartShopping} /> ADD TO CART
          </Button>
          <Button bgColor="bg-border">
            <FontAwesomeIcon icon={faBoltLightning} />
            BUY NOW
          </Button>
        </div>
      </div>
      <div className="p-2 flex flex-col items-start gap-y-2">
        <h2 className="text-lg">{item.title}</h2>
        <div>
          <div className="flex items-center gap-x-2">
            <div className="bg-rating text-white px-2 py-[2px] rounded-sm text-sm">
              <p className="flex items-center gap-x-1">
                {item.rating.toFixed(1)}{" "}
                <span>
                  <img className="h-3 invert" src="/rating.png" alt="" />
                </span>
              </p>
            </div>
            <p className="text-gray-500 text-xs md:text-base">
              {item.reviews.length} Reviews
            </p>
          </div>
        </div>
        <p className="text-rating text-sm font-semibold">Sepcial Price</p>
        <div className="flex flex-row justify-start items-center gap-x-3">
          <div className="flex md:justify-center items-center gap-x-3">
            <p className="font-medium md:text-3xl text-pirmaryText">
              ₹{Math.round(item.price * 80)}
            </p>
            <p className="text-gray-500 line-through md:text-base text-sm">
              ₹
              {Math.round(
                item.price * 80 * (1 + item.discountPercentage / 100)
              )}
            </p>
          </div>
          <p className="text-rating text-lg">
            {Math.floor(item.discountPercentage)}% off
          </p>
        </div>
        <div className="inline-flex text-base font-medium gap-x-2">
          <p className="text-gray-700">Delivery</p>
          <p className="">{item.shippingInformation}</p>
        </div>
        {item.brand && (
          <div className="inline-flex items-center text-sm gap-x-2">
            <button className="border font-medium rounded-sm text-gray-600 px-2 py-1">
              {item.brand}
            </button>
            <p>{item.warrantyInformation} from the Date of Purchase</p>
          </div>
        )}

        <div className="inline-flex items-start gap-x-2 ">
          <p className="font-medium text-gray-600 text-base">Description</p>
          <p className="text-sm">{item.description}</p>
        </div>
        {item.weight && (
          <div className="inline-flex items-center gap-x-2 text-base">
            <p className="font-medium text-gray-600">Weight</p>
            <p className="">{(item.weight * 0.453592).toFixed(2)} kg</p>
          </div>
        )}
        <div className="p-2 border rounded-sm w-full flex flex-col gap-y-2">
          <h2 className="md:text-xl text-lg">Rating and Reviews</h2>
          <p className="flex items-center text-2xl gap-x-1">
            {item.rating.toFixed(1)}{" "}
            <span>
              <img className="h-6" src="/rating.png" alt="" />
            </span>
          </p>
          {item.reviews &&
            item.reviews.map((person) => (
              <div key={person.name}>
                <div className="inline-flex items-center gap-x-4">
                  <div className="bg-rating text-white px-2 py-[2px] rounded-sm text-xs w-fit">
                    <p className="flex items-center gap-x-1">
                      {person.rating}
                      <span>
                        <img className="h-2 invert" src="/rating.png" alt="" />
                      </span>
                    </p>
                  </div>
                  <p className="font-medium text-gray-600">{person.reviewerName}</p>
                </div>
                <p>{person.comment}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
