import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { FaRegBookmark } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { ImCancelCircle } from "react-icons/im";

import { isEqual, isPart } from "../utilities/utils";
import Menubar from "./menubar";
import { CartData } from "../utilities/products";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(true);
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
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);
  return (
    <>
      <div className="flex justify-between items-center md:px-[120px] px-5 md:py-6 py-4 sticky top-0 z-50 bg-white/70 backdrop-blur-md">
        <div className="font-bold text-[16px] md:text-2xl flex justify-end items-center  gap-2">
          <Link to="/">
            <span className="p-0 m-0">
              ROME<span className="font-normal">KAN</span>
            </span>
          </Link>
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
            className="flex justify-center items-center relative cursor-pointer"
            title="cart"
          >
            <Link to="/cart">
              <FiShoppingBag
                size={25}
                className={`active:scale-95   ${
                  isPart(pathname, "cart") ? "text-[#024E82] " : ""
                }`}
              />
              <span className="absolute -top-1 -right-1 flex justify-center items-center text-white bg-[#024E82] w-[14px] h-[14px] rounded-full text-[8px] font-bold">
                {CartData.length}
              </span>
            </Link>
          </span>
          <span
            className="flex justify-center items-center md:hidden cursor-pointer "
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {!menuOpen ? <IoMenu size={25} /> : <ImCancelCircle size={25} />}
          </span>
        </div>
      </div>
      <Menubar menuOpen={menuOpen} />
    </>
  );
};

export default Header;
