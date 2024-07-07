import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { FaRegBookmark } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";

const Header = () => {
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
    <div className="flex justify-between items-center md:px-[100px] px-5 md:py-6 py-4 sticky top-0 z-50 bg-white/70 backdrop-blur-md">
      <div className="font-bold text-[16px] md:text-2xl flex justify-end items-center  gap-2">
        <span className="p-0 m-0">
          Tim<span className="text-[#024E82]">bu</span>
        </span>
      </div>
      <nav className="hidden md:flex justify-between items-center gap-12 text-sm font-normal">
        {availablePages.map((page) => (
          <Link key={page.key} to={page.key} className={`hover:text-[#024E82]`}>
            {page.label}
          </Link>
        ))}
      </nav>
      <div className="flex justify-center items-center gap-6 md:gap-8 lg:gap-12">
        <span className="hidden md:flex justify-center items-center  ">
          <FaRegBookmark size={20} />
        </span>
        <span className="flex justify-center items-center relative">
          <Link to="/cart">
            <FiShoppingBag size={20} />
            <span className="absolute -top-1 -right-1 flex justify-center items-center text-white bg-[#024E82] w-[14px] h-[14px] rounded-full text-[7px] font-bold">
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
