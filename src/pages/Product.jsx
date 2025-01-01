import React from "react";
import { Button, HeadingCard, QuantityButton } from "../components/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruckFast,
  faArrowTurnUp,
  faMoneyCheck,
  faListCheck
} from "@fortawesome/free-solid-svg-icons";

const Product = () => {
  return (
    <div className="bg-primaryBgColor p-4">
      <div className="breadcrumbs text-base font-medium">
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>MacBook</a>
          </li>
        </ul>
      </div>
      <div className="grid md:grid-cols-2 md:mt-5">
        <img className="md:w-[40vw] mx-auto" src="mac.png" alt="macbook" />
        <div className="px-6 py-4">
          <h2 className="font-medium text-xl md:text-3xl">
            Apple MacBook Pro 14 Inch Space Grey
          </h2>
          <h3 className="font-medium text-2xl my-3">Rs. 52,200.00</h3>
          <p className="text-secondaryBgColor">
            <span className="font-medium text-grayColor">Description: </span>The
            MacBook Pro 14 Inch in Space Grey is a powerful and sleek laptop,
            featuring Apple's M1 Pro chip for exceptional performance and a
            stunning Retina display.
          </p>
          <ul className="text-green my-3 list-disc list-inside">
            <li>In stock (45 units), ready to be shipped</li>
          </ul>
          <div className="h-1 w-full bg-gray-200 rounded-full">
            <div
              className="min-h-full bg-green rounded-full"
              style={{ width: `50%` }}
            ></div>
          </div>
          <p className="text-grayColor font-medium my-4">Quantity</p>
          <div className="grid grid-cols-2 md:grid-cols-4 w-full">
            <QuantityButton />
            <Button
              content="Add to Cart"
              className="rounded-lg bg-primaryButtonColor hover:bg-secondaryBgColor text-white hover:text-white md:col-span-3"
            />
          </div>
          <Button
            content="Buy It Now"
            className="w-full my-4 bg-secondaryBgColor hover:bg-primaryButtonColor text-white hover:text-white"
          />
          <div className="p-3 flex items-center justify-between">
            <div className="text-center">
              <FontAwesomeIcon size="xl" icon={faTruckFast} />
              <h4 className="mt-2 font-medium md:text-base text-sm">Fast Delivery</h4>
            </div>
            <div className="text-center">
              <FontAwesomeIcon
                className="-rotate-90"
                size="xl"
                icon={faArrowTurnUp}
              />
              <h4 className="mt-2 font-medium md:text-base text-sm">Return Policy</h4>
            </div>
            <div className="text-center">
              <FontAwesomeIcon size="xl" icon={faMoneyCheck} />
              <h4 className="mt-2 font-medium md:text-base text-sm">Payment method</h4>
            </div>
          </div>
          <div
            className={`flex md:flex-row flex-col justify-between md:items-center gap-y-2 rounded-lg md:p-2 p-4 bg-gray-200`}
          >
            <h1 className="text-base font-semibold md:my-0 my-2">Secure checkout with</h1>
            <div className="flex items-center justify-between gap-x-8">
              <img
                className="h-8"
                src="/payment-methods/visa.png"
                alt="visa-card"
              />
              <img
                className="h-8"
                src="/payment-methods/paypal.png"
                alt="paypal"
              />
              <img
                className="h-8"
                src="/payment-methods/american-express.png"
                alt="american-express-card"
              />
              <img
                className="h-8"
                src="/payment-methods/discover.png"
                alt="discover-card"
              />
            </div>
          </div>
          <h4 className="font-medium text-lg flex justify-start items-center mt-4"><span className="mr-4"><FontAwesomeIcon icon={faListCheck} /></span>About the Product</h4>
          <ul className="p-2 list-disc list-inside text-sm md:text-base">
            <li>Wight: 2.5kg</li>
            <li>Width: 12.38</li>
            <li>Height: 21.55</li>
            <li>Warranty: 1 month warranty</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Product;
