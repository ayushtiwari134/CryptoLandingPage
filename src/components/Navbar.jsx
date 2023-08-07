import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <nav className="font-semibold  bg-gray-100 sticky top-0 z-10">
      <div className="navbar hidden md:flex text-[1.2rem] justify-between p-3 px-28 items-center">
        <div className="logo text-4xl font-bold">
          De<span className="text-green-600">Fi</span>
        </div>
        <div className="links w-[45%]">
          <ul className="flex justify-around items-center">
            <li className="cursor-pointer">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link
                to="featured"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Featured
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link
                to="earn"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Earn
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Contact
              </Link>
            </li>
            <li className="cursor-pointer">
              <button className="px-2">Connect Wallet</button>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="icons absolute top-5 right-5">
        <div
          className="hamburger cursor-pointer md:hidden"
          onClick={() => setShow(!show)}
        >
          {show ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>
      </div>
      {show && (
        <div className=" border-2 gap-10 navbar-mobile absolute flex bg-gray-100 top-14 right-10 flex-col  h-[80vh] w-[70vw] items-center justify-center">
          <div className="logo text-4xl font-bold">
            De<span className="text-green-600">Fi</span>
          </div>
          <div className="links w-[45%]">
            <ul className="flex flex-col justify-center items-center gap-10">
              <li className="cursor-pointer">
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  onClick={() => {
                    setShow(!show);
                  }}
                >
                  Home
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link
                  to="featured"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  onClick={() => {
                    setShow(!show);
                  }}
                >
                  Featured
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link
                  to="earn"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  onClick={() => {
                    setShow(!show);
                  }}
                >
                  Earn
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  onClick={() => {
                    setShow(!show);
                  }}
                >
                  Contact
                </Link>
              </li>
              <li
                className="cursor-pointer"
                onClick={() => {
                  setShow(!show);
                }}
              >
                <button className="px-2">Connect Wallet</button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
