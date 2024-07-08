import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { FaRegBookmark } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { isEqual, isPart } from "../utilities/utils";

const Header = () => {
  const { pathname } = useLocation();
  const availablePages = [
    {
      key: "/",
      label: "Home",
    },
    {
      key: "/shop-all",
      label: "Shop All",
    },
    {
      key: "/contact",
      label: "Contact",
    },
  ];
  return (
    <div className="flex justify-between items-center md:px-[50px] px-5 md:py-6 py-4 sticky top-0 z-50 bg-white/70 backdrop-blur-md">
      <div className="font-bold text-[16px] md:text-2xl flex justify-end items-center  gap-2">
        <span className="p-0 m-0">
          ROME<span className="font-normal">KAN</span>
        </span>
      </div>
      <nav className="hidden md:flex justify-between items-center gap-12 text-sm font-normal">
        {availablePages.map((page) => (
          <Link
            key={page.key}
            to={page.key}
            className={`hover:text-[#024E82] ${
              isEqual(page.key, pathname) ? "text-[#024E82]" : ""
            }`}
          >
            {page.label}
          </Link>
        ))}
      </nav>
      <div className="flex justify-center items-center gap-6 md:gap-8 lg:gap-12">
        <span
          className="hidden md:flex justify-center items-center cursor-pointer  "
          title="wishlist"
        >
          <FaRegBookmark size={20} className="active:scale-95" />
        </span>
        <span
          className="flex justify-center items-center relative cursor-pointer"
          title="cart"
        >
          <Link to="/cart">
            <FiShoppingBag
              size={38}
              className={`active:scale-95 p-2  ${
                isPart(pathname, "cart") ? "text-[#024E82] border rounded" : ""
              }`}
            />
            <span className="absolute top-1 right-1 flex justify-center items-center text-white bg-[#024E82] w-[14px] h-[14px] rounded-full text-[7px] font-bold">
              10
            </span>
          </Link>
        </span>
        <span className="flex justify-center items-center md:hidden  ">
          <IoMenu size={25} />
        </span>
      </div>
    </div>
  );
};

export default Header;
