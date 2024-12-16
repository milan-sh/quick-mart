import React from "react";
import Logo from "../Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-secondaryBg p-8">
      <div className="grid grid-cols-3 p-4 justify-items-center">
        <Logo />
        <div>
          <h4 className="text-white mb-2 font-semibold">Get to Know Us</h4>
          <ul className="text-secondaryText text-sm">
            <li>About Us</li>
            <li>Our Services</li>
            <li>QuickMart Science</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white mb-2 font-semibold">Connect with Us</h4>
          <ul className="text-secondaryText text-sm">
            <li>
              <a
                href="https://www.linkedin.com/in/milan-singh-81ms33/"
                target="_blank"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a>
                Twitter
              </a>
            </li>
            <li>
              <a  href="https://github.com/milan-sh" target="_blank">Github</a>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-gray-400 text-center mt-5">
        All rights reserved <FontAwesomeIcon icon={faCopyright} /> QuickMart.
      </p>
    </footer>
  );
};

export default Footer;
