import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { HiOutlineXMark } from "react-icons/hi2";

export default function Header() {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const handleHamburgerMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };
  return (
    <div className="bg-primary text-white">
      <div className="container mx-auto px-3 py-4 md:py-2">
        <header className="flex justify-between items-center">
          <div className="font-bold uppercase text-lg md:text-xl lg:text-2xl flex gap-2 items-center">
            <FaBars className="lg:hidden" onClick={handleHamburgerMenu} />
            Printing&nbsp;Solution
          </div>
          <div className="flex justify-between items-center">
            <div className="text-lg gap-6  uppercase hidden lg:flex">
              <Link to="/home">Home</Link>
              <Link to="/home">Products</Link>
              <Link to="/home">Services</Link>
              <Link to="/home">About&nbsp;us</Link>
            </div>
            <button
              type="button"
              className="btn hidden md:inline-block btn-info ml-10"
            >
              Call Now
            </button>
          </div>
        </header>
        <div
          className={`lg:hidden w-screen h-screen flex flex-col text-2xl uppercase font-bold justify-around absolute top-0 left-0 bg-primary text-center transition-all duration-300 ${
            mobileMenuVisible ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <HiOutlineXMark
            onClick={() => setMobileMenuVisible(!mobileMenuVisible)}
            className="text-5xl ml-11"
          />
          <Link to="/home">Home</Link>
          <Link to="/home">Products</Link>
          <Link to="/home">Services</Link>
          <Link to="/home">About&nbsp;us</Link>
        </div>
      </div>
    </div>
  );
}
