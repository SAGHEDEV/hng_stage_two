import React from "react";
import { FaArrowCircleLeft, FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const EmptyPage = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  return (
    <div className="flex flex-col justify-center items-center py-10">
      <div className="border p-3 rounded-full w-48 h-48 flex justify-center items-center text-[#024E82]">
        <FaShoppingCart size={120} />
      </div>
      <h3 className="text-2xl font-bold text-center mt-10 text-[#024E82]">
        Ohhhh, Page is still under construction
      </h3>
      <p className="py-2 px-2 pb-4 text-center font-extralight">
        This page you are looking for is either under construction or not
        available, kindly go back and continue shopping
      </p>
      <span
        className=" w-48 h-12 bg-[#024E82] text-white text-sm flex justify-center items-center gap-2 font-semibold rounded cursor-pointer active:scale-95"
        onClick={() => goBack()}
      >
        <FaArrowCircleLeft /> Continue Shopping
      </span>
    </div>
  );
};

export default EmptyPage;
