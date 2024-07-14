import React, { useState } from "react";
import { MdCancel } from "react-icons/md";

const CartCard = ({
  cart,
  handleCartDelete,
  handleIncrease,
  handleDecrease,
}) => {
  console.log(cart);

  return (
    <>
      <div className="hidden my-4  lg:flex justify-between items-center px-5 py-5 rounded-xl shadow-md relative">
        <div className="flex justify-start items-center gap-3 w-1/4">
          <div className="flex justify-center items-center p-2 bg-[#F9F9F9] w-20 h-20">
            <img
              src={`https://api.timbu.cloud/images/${cart?.photos[0].url}`}
              alt="https://via.placeholder.com/400"
              className="w-full"
            />
          </div>
          <p className="text-lg font-normal">{cart?.name}</p>
        </div>
        <span className="text-lg font-normal w-1/4 text-center">
          $ {cart?.current_price[0].USD[0]}
        </span>
        <div className="w-1/4 flex justify-center">
          <div className="border rounded flex w-fit">
            <span
              className=" h-10 w-10 flex justify-center items-center bg-white cursor-pointer active:scale-95 hover:bg-gray-50"
              onClick={() => handleDecrease(cart)}
            >
              -
            </span>
            <span className=" h-10 w-10 flex justify-center items-center bg-[#D9D9D9]">
              {cart.quantity}
            </span>
            <span
              className=" h-10 w-10 flex justify-center items-center bg-white cursor-pointer active:scale-95 hover:bg-gray-50"
              onClick={() => handleIncrease(cart)}
            >
              +
            </span>
          </div>
        </div>

        <span className="text-lg font-semibold w-1/4 text-center">
          $ {cart?.subtotal}
        </span>

        <MdCancel
          className="text-lg text-red-700 absolute top-2 right-2 cursor-pointer"
          title="Remove Item from Cart"
          onClick={() => handleCartDelete(cart?.id)}
        />
      </div>

      <div className="shadow-lg my-3 shadow-[#0000000D] lg:hidden flex flex-col gap-8 relative bg-white min-h-[267px] px-4 py-6">
        <span className="flex gap-6 items-center">
          <p className="text-base">Product:</p>
          <span className="flex gap-4 items-center">
            <span className="bg-[#F9F9F9] w-[88px]  flex justify-center items-center">
              <img
                src={`https://api.timbu.cloud/images/${cart?.photos[0].url}`}
                alt=""
                className="w-full"
              />
            </span>
            <p className="text-romekan-text-300 text-[18px]">{cart?.name}</p>
          </span>
        </span>
        <span className="flex gap-6 items-center">
          <p className="text-base">Pricing:</p>
          <p className="text-[14px]">${cart?.current_price[0].USD[0]}</p>
        </span>
        <span className="flex gap-6 items-center">
          <p className="text-base">Quantity:</p>
          <div className="border rounded flex w-fit">
            <span
              className=" h-10 w-10 flex justify-center items-center bg-white cursor-pointer active:scale-95 hover:bg-gray-50"
              onClick={() => handleDecrease(cart)}
            >
              -
            </span>
            <span className=" h-10 w-10 flex justify-center items-center bg-[#D9D9D9]">
              {cart.quantity}
            </span>
            <span
              className=" h-10 w-10 flex justify-center items-center bg-white cursor-pointer active:scale-95 hover:bg-gray-50"
              onClick={() => handleIncrease(cart)}
            >
              +
            </span>
          </div>
        </span>
        <span className="flex gap-6 items-center">
          <p className="text-base">Subtotal:</p>
          <p className="text-[14px]">${cart.subtotal}</p>
        </span>
        <MdCancel
          className="text-lg text-red-700 absolute top-2 right-2 cursor-pointer active:scale-95"
          title="Remove Item from Cart"
          onClick={() => handleCartDelete(cart?.id)}
        />
      </div>
    </>
  );
};

export default CartCard;
