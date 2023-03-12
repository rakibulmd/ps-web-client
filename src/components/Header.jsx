import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { FaBars } from "react-icons/fa";
import { HiOutlineXMark } from "react-icons/hi2";

export default function Header() {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const handleHamburgerMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };
  function animateLinks() {
    // eslint-disable-next-line no-unused-expressions
    mobileMenuVisible &&
      gsap.from(".mobile-menu__link", {
        x: "-90vw",
        duration: 0.3,
        stagger: 0.07,
        ease: "easeInOut",
      });
    // eslint-disable-next-line no-unused-expressions
    !mobileMenuVisible &&
      gsap.from(".mobile-menu__link", { x: 0, duration: 0 });
  }
  useEffect(() => {
    animateLinks();
    return () => {
      gsap.set(".mobile-menu__link", { x: 0, duration: 0 });
    };
  }, [mobileMenuVisible]);
  return (
    <div className="bg-primary text-white fixed top-0 left-0 right-0 z-50 shadow-md">
      <div className="container mx-auto px-3 py-4 md:py-2">
        <header className="flex justify-between items-center">
          <div className="font-bold uppercase text-lg md:text-xl lg:text-2xl flex gap-2 items-center cursor-pointer">
            <FaBars
              className="lg:hidden text-3xl mr-4"
              onClick={handleHamburgerMenu}
            />
            Printing&nbsp;Solution
          </div>
          <div className="flex justify-between items-center">
            <div className="text-lg gap-6  uppercase hidden lg:flex">
              <Link to="/">Home</Link>
              <Link to="/products">Products</Link>
              <Link to="/services">Services</Link>
              <Link to="/about">About&nbsp;us</Link>
            </div>
            <button
              type="button"
              className="btn hidden md:inline-block glass ml-10 text-white text-lg"
            >
              Get Quotation
            </button>
          </div>
        </header>

        <div
          className={`fixed top-0 z-50 left-0 w-screen h-screen items-between flex
      text-white uppercase text-3xl duration-300 transition-all ease-in-out ${
        mobileMenuVisible ? "translate-x-0" : "-translate-x-full"
      }`}
        >
          <div className="flex cursor-pointer flex-col flex-1 bg-primary/80 gap-5 backdrop-blur-sm tracking-wider text-center text-shadow">
            <HiOutlineXMark
              onClick={() => setMobileMenuVisible(!mobileMenuVisible)}
              className="text-8xl ml-4 p-3 block"
            />
            <Link
              to="/"
              className="mobile-menu__link"
              onClick={() => setMobileMenuVisible(!mobileMenuVisible)}
            >
              Home
            </Link>
            <Link
              to="/products"
              className="mobile-menu__link"
              onClick={() => setMobileMenuVisible(!mobileMenuVisible)}
            >
              Products
            </Link>
            <Link
              to="/services"
              className="mobile-menu__link"
              onClick={() => setMobileMenuVisible(!mobileMenuVisible)}
            >
              Services
            </Link>
            <Link
              to="/about"
              className="mobile-menu__link"
              onClick={() => setMobileMenuVisible(!mobileMenuVisible)}
            >
              About&nbsp;us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
