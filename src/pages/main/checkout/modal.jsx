import React from "react";
import { BsCheck2 } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";

const Modal = ({ show, hideConfirm, setStatusShow, setShow }) => {
  return (
    <div
      className={`w-full lg:w-[100vh] h-[100%] fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center ${
        show ? "block" : "hidden"
      }`}
    >
      <div className="w-[100%] h-[100%] fixed top-0 left-0 right-0 bottom-0 bg-black/30"></div>
      <div className="bg-white p-8 lg:p-10 rounded-md z-20 self-center relative lg:left-[50%] lg:right-[50%] ">
        <p className="text-[16px] lg:text-[32px] p-5 text-center">
          Are you sure you want to complete the order?
        </p>

        <div className="flex justify-center gap-12 mt-4">
          <button className="border border-green-500 text-green-500 rounded-md px-12 py-3 hover:bg-green-500 hover:text-white font-bold text-2xl" onClick={()=>{setShow(false),setStatusShow(true)}}>
            <BsCheck2 />
          </button>
          <button
            className="border border-red-500 text-red-500 rounded-md px-12 py-3 hover:bg-red-500 hover:text-white font-bold text-2xl"
            onClick={hideConfirm}
          >
            <RxCross2 />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
