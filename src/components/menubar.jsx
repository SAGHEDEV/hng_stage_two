import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Menubar = ({ menuOpen }) => {
  return (
    <div
      className={`w-full  h-[100%] fixed top-0 left-0 right-0 bottom-0 z-10 lg:hidden ${
        menuOpen ? "block" : "hidden"
      }`}
    >
      <div className="w-[100%]  h-[100%] fixed top-0 left-0 right-0 bottom-0 bg-black/30"></div>
      <div className="w-[300px] h-full fixed left-0 flex flex-col justify-start rounded-lg px-4 py-14 bg-white">
        <Link className="w-full" to="/">
          <span className="w-full h-16 px-4 my-3 flex justify-start items-center hover:bg-gray-100 active:scale-95 cursor-pointer">
            Home
          </span>
        </Link>
        <Link className="w-full" to="shop-all">
          <span className="w-full h-16 px-4 my-3 flex justify-start items-center hover:bg-gray-100 active:scale-95 cursor-pointer">
            Shop All
          </span>
        </Link>
        <Link className="w-full" to="cart">
          <span className="w-full h-16 px-4 my-3 flex justify-start items-center hover:bg-gray-100 active:scale-95 cursor-pointer">
            My Order
          </span>
        </Link>
        <p className="font-light text-xs text-left">Others</p>
        <Link className="w-full" to="contact">
          <span className="w-full h-16 px-4 my-3 flex justify-start items-center hover:bg-gray-100 active:scale-95 cursor-pointer">
            My Order
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Menubar;
