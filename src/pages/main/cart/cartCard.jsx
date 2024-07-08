import React from "react";
import { MdCancel } from "react-icons/md";

const CartCard = () => {
  return (
    <>
      <div className="hidden my-2  lg:flex justify-between items-center px-5 py-5 rounded-xl shadow-md relative">
        <div className="flex justify-start items-center gap-3 w-1/4">
          <div className="flex justify-center items-center p-2 bg-[#F9F9F9] w-20 h-20">
            <img
              src="https://images.unsplash.com/photo-1611967164521-abae8fba4668?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              width={50}
            />
          </div>
          <p className="text-lg font-normal">Krisgold Chair</p>
        </div>
        <span className="text-lg font-normal w-1/4 text-center">$50</span>
        <div className="w-1/4 flex justify-center">
          <div className="border rounded flex w-fit">
            <span className=" h-10 w-10 flex justify-center items-center bg-white cursor-pointer hover:bg-gray-50">
              -
            </span>
            <span className=" h-10 w-10 flex justify-center items-center bg-[#D9D9D9]">
              1
            </span>
            <span className=" h-10 w-10 flex justify-center items-center bg-white cursor-pointer hover:bg-gray-50">
              +
            </span>
          </div>
        </div>

        <span className="text-lg font-semibold w-1/4 text-center">$50</span>

        <MdCancel className="text-lg text-red-700 absolute top-2 right-2 cursor-pointer" />
      </div>

      <div className="shadow-md shadow-[#0000000D] lg:hidden flex flex-col gap-8 relative bg-white min-h-[267px] px-4 py-6">
        <span className="flex gap-6 items-center">
          <p className="text-base">Product:</p>
          <span className="flex gap-4 items-center">
            <span className="bg-[#F9F9F9] w-[88px]  flex justify-center items-center">
              <img
                src="https://images.unsplash.com/photo-1611967164521-abae8fba4668?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                width={"52px"}
              />
            </span>
            <p className="text-romekan-text-300 text-[18px]">Red Chair</p>
          </span>
        </span>
        <span className="flex gap-6 items-center">
          <p className="text-base">Pricing:</p>
          <p className="text-[14px]">$50</p>
        </span>
        <span className="flex gap-6 items-center">
          <p className="text-base">Quantity:</p>
          <div className="border rounded flex w-fit">
            <span className=" h-10 w-10 flex justify-center items-center bg-white cursor-pointer hover:bg-gray-50">
              -
            </span>
            <span className=" h-10 w-10 flex justify-center items-center bg-[#D9D9D9]">
              1
            </span>
            <span className=" h-10 w-10 flex justify-center items-center bg-white cursor-pointer hover:bg-gray-50">
              +
            </span>
          </div>
        </span>
        <span className="flex gap-6 items-center">
          <p className="text-base">Subtotal:</p>
          <p className="text-[14px]">$50</p>
        </span>
        <MdCancel className="text-lg text-red-700 absolute top-2 right-2 cursor-pointer active:scale-95" />
      </div>
    </>
  );
};

export default CartCard;
