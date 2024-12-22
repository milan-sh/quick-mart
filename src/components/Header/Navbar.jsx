import React from "react";
import Logo from "./Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "../ui/button";
import {
  faBars,
  faXmark,
  faUser,
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { Input } from "@/components/ui/input";

const Navbar = () => {
  return (
    <nav className="p-4 flex justify-between items-center">
      <div className="flex justify-between items-center gap-x-4">
        <FontAwesomeIcon className="md:hidden block" icon={faBars} size="xl" />
        <Logo />
      </div>
      <div className="flex items-center justify-between gap-x-4">
        <div className="hidden input md:inline-flex items-center justify-between gap-x-2 border rounded-md px-4">
          <FontAwesomeIcon size="lg" color="gray" icon={faMagnifyingGlass} />
          <Input
            placeholder="Search for Products.."
            className="border-none md:text-lg outline-none focus-visible:ring-0"
          />
        </div>
        <Button className="flex items-start justify-center gap-x-1">
          <FontAwesomeIcon size="xl" icon={faUser} />
          <p>Login</p>
        </Button>
        <button>
          <FontAwesomeIcon size="xl" icon={faCartShopping} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
