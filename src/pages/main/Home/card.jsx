import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductCard = ({ chair }) => {
  return (
    <div className=" hover:border rounded-lg overflow-hidden product-card relative">
      <div className="flex justify-center items-center w-full bg-[#F9F9F9] p-10">
        <img
          src={chair.imageSrc}
          alt="https://via.placeholder.com/400"
          className="h-28 lg:h-56  product-img"
        />
      </div>
      <div className="p-5">
        <p className="text-[14px] lg:text-[18px] font-normal pb-3 hover:underline cursor-pointer hover:text-[#024E82]">
          {chair.name}
        </p>
        <div className="flex justify-between items-center ">
          <p>
            <span className="font-medium text-[16px] lg:text-[24px] pr-2">
              ${chair.price}
            </span>
            <span className="font-medium text-[10px] lg:text-[20px] text-[#BABABA] line-through">
              ${chair.discountPrice}
            </span>
          </p>
          <Link to="cart">
            <div
              className="p-2 bg-[#024E82] rounded-full text-white cursor-pointer hover:opacity-80"
              title="Add to cart"
            >
              <FaShoppingCart className="text-[12px] lg:text-[18px]" />
            </div>
          </Link>
        </div>
      </div>
      {chair.discount ? (
        <span className="absolute top-1 right-1 px-2 py-1 bg-[#652A0E] text-white text-xs rounded-md">
          {chair.discount}
        </span>
      ) : (
        ""
      )}
    </div>
  );
};

export default ProductCard;
