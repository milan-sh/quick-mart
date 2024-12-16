import React from "react";
import Logo from "../Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faCartShopping,
  faLocationDot,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  return (
    <nav className="p-4 sticky top-0 z-20 bg-secondaryBg text-white flex items-center justify-between">
      <div className="flex items-center justify-center gap-x-6">
        <FontAwesomeIcon className="md:hidden" icon={faBars} size="2xl" />
        <Logo />
      </div>
      <button className="hidden md:flex items-end justify-start gap-1 leading-none">
        <FontAwesomeIcon icon={faLocationDot} size="lg"/>
        <div>
          <p className="text-xs text-secondaryText">Delivering to Kakrola 110078</p>
          <h2 className="text-sm text-left leading-none">Update location</h2>
        </div>
      </button>
      <div className="hidden search md:flex gap-0 min-w-[50%]">
        <input
          className="outline-none text-pirmaryText px-2 rounded-l-sm py-2 w-full"
          type="text"
          placeholder="Search..."
        />
        <button>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            size="xl"
            className="bg-border py-2 px-3 rounded-r-sm m-0 text-gray-700"
          />
        </button>
      </div>
      <button className="md:block hidden p-2 border rounded-sm border-border">
        My Orders
      </button>
      <button className="flex items-end gap-0 relative">
        <FontAwesomeIcon icon={faCartShopping} size="2xl" />
        <p className="hidden md:block m-0 leading-none">Cart</p>
        <p className="absolute rounded-xl -top-2 left-3 bg-border text-pirmaryText px-1 font-semibold
        ">1</p>
      </button>
    </nav>
  );
};

export default Nav;
