import React from "react";
import Button from "../Button"

const Filter = () => {
  return (
    <div className="hidden shadow-custom px-4 py-2 md:flex justify-between items-center mb-2">
      <div className="flex items-center justify-between gap-x-2 w-fit hover:text-primaryButtonColor">
        {/* Swap component */}
        <label className="swap swap-rotate">
          {/* Hidden checkbox controlling the swap state */}
          <input type="checkbox" />

          {/* Hamburger icon */}
          <svg
            className="swap-off fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 512 512"
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>

          {/* Close icon */}
          <svg
            className="swap-on fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 512 512"
          >
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </label>
        {/* Text to toggle */}
        <p
          className="font-medium cursor-pointer"
          onClick={() => {
            document.querySelector(".swap input")?.click(); // Trigger the swap toggle
          }}
        >
          All Categories
        </p>
      </div>
      <div className="flex items-center justify-between gap-x-2">
        <Button content="Shop"/>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <li>
              <details>
                <summary className="hover:text-primaryButtonColor text-base">LED TVs</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                  <li>
                    <a>TV 1</a>
                  </li>
                  <li>
                    <a>TV 2</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <Button content="Contact" />
      </div>
      <div className="flex justify-between items-center gap-x-2 font-medium text-base">
        <button className="hover:text-primaryButtonColor">About Us</button>
        <p>|</p>
        <button className="hover:text-primaryButtonColor">FAQs</button>
      </div>
    </div>
  );
};

export default Filter;
