import React from "react";
import { Button, HeadingCard } from "../components/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";
import {
  faTruckFast,
  faArrowTurnUp,
  faMoneyCheck,
  faListCheck,
} from "@fortawesome/free-solid-svg-icons";

import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../store/cartSlice";

const Product = () => {
  const { selectedProduct } = useSelector((state) => state.products);
  const dispatch = useDispatch();


  return (
    <div className="bg-primaryBgColor p-4">
      <div className="breadcrumbs text-base font-medium">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>{selectedProduct?.title}</li>
        </ul>
      </div>
      <div className="grid md:grid-cols-2 md:mt-5">
        <img
          className="md:w-[40vw] mx-auto"
          src={`${selectedProduct?.thumbnail}`}
          alt="macbook"
        />
        <div className="px-6 py-4">
          <h2 className="font-medium text-xl md:text-3xl">
            {selectedProduct?.title}
          </h2>
          <h3 className="font-medium text-2xl my-3">
            Rs.{" "}
            {Math.round(selectedProduct?.price * 85.88).toLocaleString(
              "en-IN"
            ) || 5}
            .00
          </h3>
          <p className="text-secondaryBgColor">
            <span className="font-medium text-grayColor">Description: </span>The
            {selectedProduct?.description}
          </p>
          <ul className="text-green my-3 list-disc list-inside">
            <li>
              In stock ({selectedProduct?.stock} units), ready to be shipped
            </li>
          </ul>
          <div className="h-1 w-full bg-gray-200 rounded-full">
            <div
              className="min-h-full bg-green rounded-full"
              style={{ width: `${selectedProduct?.stock}%` }}
            ></div>
          </div>
          <p className="text-grayColor font-medium my-4">Quantity</p>
          <div className="grid grid-cols-2 md:grid-cols-4 w-full">
            {/* <QuantityButton /> */}
            <Button
              className="rounded-lg bg-primaryButtonColor hover:bg-secondaryBgColor text-white hover:text-white md:col-span-3"
              onClick={() => {
                // console.log("Selected Product:", selectedProduct); // Debugging
                dispatch(addItem(selectedProduct));
              }}
            >Add to cart</Button>
          </div>
          <Button
            content="Buy It Now"
            className="w-full my-4 bg-secondaryBgColor hover:bg-primaryButtonColor text-white hover:text-white"
          >Checkout</Button>
          <div className="p-3 flex items-center justify-between">
            <div className="text-center">
              <FontAwesomeIcon size="xl" icon={faTruckFast} />
              <h4 className="mt-2 font-medium md:text-base text-sm">
                Fast Delivery
              </h4>
            </div>
            <div className="text-center">
              <FontAwesomeIcon
                className="-rotate-90"
                size="xl"
                icon={faArrowTurnUp}
              />
              <h4 className="mt-2 font-medium md:text-base text-sm">
                Return Policy
              </h4>
            </div>
            <div className="text-center">
              <FontAwesomeIcon size="xl" icon={faMoneyCheck} />
              <h4 className="mt-2 font-medium md:text-base text-sm">
                Payment method
              </h4>
            </div>
          </div>
          <div
            className={`flex md:flex-row flex-col justify-between md:items-center gap-y-2 rounded-lg md:p-2 p-4 bg-gray-200`}
          >
            <h1 className="text-base font-semibold md:my-0 my-2">
              Secure checkout with
            </h1>
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
          <h4 className="font-medium text-lg flex justify-start items-center mt-4">
            <span className="mr-4">
              <FontAwesomeIcon icon={faListCheck} />
            </span>
            About the Product
          </h4>
          <ul className="p-2 list-disc list-inside text-sm md:text-base">
            <li>Width: {selectedProduct?.dimensions.width}</li>
            <li>Height: {selectedProduct?.dimensions.height}</li>
            <li>{selectedProduct?.warrantyInformation}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Product;
