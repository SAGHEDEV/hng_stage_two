import React from "react";
import { CiCircleCheck } from "react-icons/ci";
import { Link } from "react-router-dom";

const CoonfirmModal = ({ statusShow }) => {
  return (
    <div
      className={`w-full lg:w-[100vh] h-[100%] fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center ${
        statusShow ? "block" : "hidden"
      }`}
    >
      <div className="w-[100%] h-[100%] fixed top-0 left-0 right-0 bottom-0 bg-black/30"></div>
      <div className="bg-white p-8 lg:p-10 rounded-md z-20 self-center relative lg:left-[50%] lg:right-[50%] flex justify-center items-center flex-col">
        <p className="text-[16px] lg:text-[32px] p-5 text-center">
          Are you sure you want to complete the order?
        </p>
        <p className="text-[12px] lg:text-[16px] font-normal text-center ">
          The product you ordered will be delivered in your address within
          5days.
        </p>

        <span className="text-5xl lg:text-[120px] text-green-500 my-5">
          <CiCircleCheck />
        </span>

        <div className="flex justify-center items-center mt-4">
          <Link to="/">
            <button className="border bg-[#024E82] text-white rounded-md px-12 py-3  active:scale-95 font-bold text-[14px] lg:text-[16px]">
              Return to store
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CoonfirmModal;
