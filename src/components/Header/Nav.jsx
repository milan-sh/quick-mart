import React from "react";
import Logo from "../Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faUser,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";
import SearchInput from "../SearchInput";
import { Link } from "react-router";
import { useSelector } from "react-redux";

const Nav = () => {

  const {totalQuantity, totalPrice} = useSelector((state)=> state.cart)

  return (
    <nav className="p-4 sticky top-0 z-50 bg-primaryBgColor flex justify-between items-center">
      <div className="flex items-center justify-between gap-x-4">
        <FontAwesomeIcon className="md:hidden" size="2xl" icon={faBars} />
        <Logo />
      </div>
      <div className="md:w-2/4 hidden md:block">
        <SearchInput />
      </div>
      <div className="flex justify-between gap-x-2 md:gap-x-6">
        <div className="dropdown flex justify-between items-center w-fit gap-x-2 hover:text-primaryButtonColor">
          <div className="dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 relative rounded-full flex justify-center items-center ">
                <FontAwesomeIcon
                  className="absolute top-[50%] left[50%] -translate-x-[50%] -translate-y-[50%]"
                  size="2xl"
                  icon={faUser}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content rounded-box z-10 mt-3 w-52 p-2 shadow bg-white text-black"
            >
              <li className="hover:text-primaryButtonColor">
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li className="hover:text-primaryButtonColor">
                <a>Settings</a>
              </li>
              <li className="hover:text-primaryButtonColor">
                <a>Logout</a>
              </li>
            </ul>
          </div>
          <button className="hidden md:block">
            <p className="text-sm font-medium text-left leading-none">
              Hello, sign in
            </p>
            <h2 className="font-medium leading-none">Account & List</h2>
          </button>
        </div>
        <div className="dropdown flex justify-between items-center w-fit gap-x-2 hover:text-primaryButtonColor">
          <div className=" dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <FontAwesomeIcon size="2xl" icon={faBagShopping} />
                <span className="badge badge-sm rounded-full indicator-item bg-primaryButtonColor text-white p-2">
                  {totalQuantity}
                </span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content z-10 mt-3 w-52 shadow bg-white text-black"
            >
              <div className="card-body">
                <span className="text-lg font-bold">{totalQuantity} items</span>
                <span className="text-info">Subtotal: Rs. {(totalPrice).toLocaleString('en-IN')}.00</span>
                <div className="card-actions">
                  <button className="btn bg-primaryButtonColor text-white hover:bg-secondaryBgColor btn-block">
                    <Link to="cart">View cart</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <button className="hidden md:block">
            <p className="text-sm font-medium text-left leading-none">Cart</p>
            <h2 className="font-medium leading-none">
              Rs. <span>{(totalPrice).toLocaleString('en-IN')}.00</span>
            </h2>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
