import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { RiCloseLine, RiMenuLine } from "@remixicon/react";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full bg-primary py-3 font-lato z-[999]">
      <div className="section-width flex justify-between items-center">
        <div className="flex items-center gap-6 lg:gap-12">
          <img className="size-14 md:size-20" src={logo} alt="" />

          <ul className="hidden md:flex text-white gap-3 lg:gap-5 text-base lg:text-lg">
            <li className="cursor-pointer">Solution</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Documentation</li>
            <li className="cursor-pointer">Ecosystems</li>
            <li className="cursor-pointer">Blogs</li>
          </ul>
        </div>

        <div className="hidden md:flex text-white text-base lg:text-lg items-center gap-5 lg:gap-10">
          <p className="cursor-pointer">Access Wallet</p>
          <button className="font-bold px-3 lg:px-5 py-3 lg:py-4 bg-primaryDeep rounded-md">
            Connect Wallet
          </button>
        </div>

        <button
          onClick={() => setShowNav(true)}
          className="md:hidden text-white text-xl"
        >
          <RiMenuLine />
        </button>

        {/* Mobile Menu */}

        <div
          className={`fixed bg-white top-0 right-0 h-full w-64 p-5 shadow-xl duration-300 ${
            showNav ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <RiCloseLine
            onClick={() => setShowNav(false)}
            className="text-gray-800 mb-5 cursor-pointer"
          />
          <ul className="flex flex-col text-gray-800 gap-3 lg:gap-5 text-base lg:text-lg">
            <li className="cursor-pointer hover:text-primary">Solution</li>
            <li className="cursor-pointer hover:text-primary">About</li>
            <li className="cursor-pointer hover:text-primary">Documentation</li>
            <li className="cursor-pointer hover:text-primary">Ecosystems</li>
            <li className="cursor-pointer hover:text-primary">Blogs</li>
          </ul>
          <hr className="my-6 border-gray-400" />
          <div className="flex flex-col text-base lg:text-lg items-start gap-5 lg:gap-10">
            <p className="cursor-pointer text-gray-800 hover:text-primary">
              Access Wallet
            </p>
            <button className="font-bold px-3 text-white lg:px-5 py-3 lg:py-4 bg-primaryDeep rounded-md">
              Connect Wallet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
