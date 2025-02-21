import React from "react";
import { Button, HeadingCard } from "../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { updateQuantity, removeItem } from "../store/cartSlice";
import { Link } from "react-router";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
  const { items, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  if (items.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center p-8">
        <img className="h-36" src="empty-cart.png" alt="" />
        <p className="font-semibold text-lg">Your cart is empty</p>
        <Link to="/">
          <Button className="bg-primaryButtonColor text-white mt-8 cursor-pointer hover:bg-secondaryBgColor hover:text-primaryBgColor">
            Continue Shopping
          </Button>
        </Link>
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
        <div>
          {items.map((item) => (
            <div key={item.id} className="grid md:grid-cols-3 gap-y-3">
              <div className="grid grid-cols-2 place-items-center">
                <img
                  className="md:h-44 h-40"
                  src={`${item.thumbnail}`}
                  alt=""
                />
                <div>
                  <h3 className="font-medium md:text-base text-sm">
                    {item.title}
                  </h3>
                  <h3 className="font-semibold text-lg">
                    Rs. {Math.round(item.price * 85.49)}.00
                  </h3>
                </div>
              </div>
              <div className="flex justify-end md:justify-center items-center gap-x-4">
                <div className="flex justify-between items-center gap-x-4 w-fit border border-gray-200 rounded-lg">
                  <button className="px-4 py-1 text-grayColor cursor-pointer"
                  onClick={()=>dispatch(updateQuantity({id:item.id, quantity:-1}))}
                  >
                    <FontAwesomeIcon icon={faMinus} />
                  </button>
                  <p>{item.quantity}</p>
                  <button
                    className="px-4 py-1 cursor-pointer"
                    onClick={()=>dispatch(updateQuantity({id:item.id, quantity:1}))}
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                </div>
                <button
                onClick={()=>dispatch(removeItem(item.id))}
                >
                  <FontAwesomeIcon className="text-gray-600" icon={faTrash} />
                </button>
              </div>
              <div className="flex justify-end items-center">
                <h1 className="font-medium text-xl">Rs. 900.00</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-end gap-y-4">
        <div className="flex items-center gap-x-3 font-medium">
          <p>Subtotal {`(${items.length})`}</p>
          <h2 className="text-xl">Rs. {totalPrice}.00</h2>
        </div>
        <p className="text-sm">Taxes and shipping calculated at checkout</p>
        <Link to="/checkout"><Button className="bg-primaryButtonColor text-white hover:bg-secondaryBgColor hover:text-white w-full md:w-96">
          Checkout
        </Button></Link>
      </div>
    </div>
  );
};

export default Cart;
