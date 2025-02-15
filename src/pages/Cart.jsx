import React from "react";
import { Button, HeadingCard, QuantityButton } from "../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router";

const Cart = () => {
  const { items } = useSelector((state) => state.cart);
  console.log("items", items)

  if (items.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center p-8">
        <img className="h-36" src="empty-cart.png" alt="" />
        <p className="font-semibold text-lg">Your cart is empty</p>
        <Link to="/"><Button
        content="Continue Shopping"
        className="bg-primaryButtonColor text-white mt-8 cursor-pointer hover:bg-secondaryBgColor hover:text-primaryBgColor"
        /></Link>
      </div>
    );
  }

  return (
    <div className="bg-primaryBgColor p-4">
      <div className="breadcrumbs text-base font-medium mb-4">
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Your shopping cart</a>
          </li>
        </ul>
      </div>
      <HeadingCard
        category="Shopping cart"
        link="Continue Shopping"
        size="md:text-xl text-lg"
      />
      <div className="my-3 bg-gray-200 p-6 rounded-lg">
        <div className="hidden md:flex justify-between items-center font-medium">
          <h2>PRODUCTS</h2>
          <p>QUANTITY</p>
          <p>TOTAL</p>
        </div>
        <hr className="bg-gray-300 h-[2px] mt-4" />
        <div className="grid md:grid-cols-3 gap-y-3">
          <div className="flex justify-center items-center">
            <img className="md:h-52 h-40" src="/mac.png" alt="" />
            <div>
              <h3 className="font-medium md:text-base text-sm">
                Win powerpod pro 15W wireless charger
              </h3>
              <h3 className="font-semibold text-lg">Rs. 1,00000</h3>
            </div>
          </div>
          <div className="flex justify-end md:justify-center items-center gap-x-4">
            <QuantityButton />
            <button>
              <FontAwesomeIcon className="text-gray-600" icon={faTrash} />
            </button>
          </div>
          <div className="flex justify-end items-center">
            <h1 className="font-medium text-xl">Rs. 900.00</h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end gap-y-4">
        <div className="flex items-center gap-x-3 font-medium">
          <p>Subtotal (3)</p>
          <h2 className="text-xl">Rs. 10,500</h2>
        </div>
        <p className="text-sm">Taxes and shipping calculated at checkout</p>
        <Button
          content="Checkout"
          className="bg-primaryButtonColor text-white hover:bg-secondaryBgColor hover:text-white w-full md:w-96"
        />
      </div>
    </div>
  );
};

export default Cart;
