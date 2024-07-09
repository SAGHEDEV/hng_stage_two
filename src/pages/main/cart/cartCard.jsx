import React, { useState } from "react";
import { MdCancel } from "react-icons/md";

const CartCard = ({ cart, handleCartDelete }) => {
  const [numOfProd, setNumOfProd] = useState(1);
  const handleIncrease = () => {
    setNumOfProd((prevNum) => Number(prevNum) + 1);
  };
  const handleDecrease = () => {
    if (numOfProd > 1) {
      setNumOfProd((prevNum) => Number(prevNum) - 1);
    }
  };
  return (
    <>
      <div className="hidden my-4  lg:flex justify-between items-center px-5 py-5 rounded-xl shadow-md relative">
        <div className="flex justify-start items-center gap-3 w-1/4">
          <div className="flex justify-center items-center p-2 bg-[#F9F9F9] w-20 h-20">
            <img
              src={cart.imageSrc}
              alt="https://via.placeholder.com/400"
              width={50}
            />
          </div>
          <p className="text-lg font-normal">{cart.name}</p>
        </div>
        <span className="text-lg font-normal w-1/4 text-center">
          ${cart.price}
        </span>
        <div className="w-1/4 flex justify-center">
          <div className="border rounded flex w-fit">
            <span
              className=" h-10 w-10 flex justify-center items-center bg-white cursor-pointer active:scale-95 hover:bg-gray-50"
              onClick={handleDecrease}
            >
              -
            </span>
            <span className=" h-10 w-10 flex justify-center items-center bg-[#D9D9D9]">
              {numOfProd}
            </span>
            <span
              className=" h-10 w-10 flex justify-center items-center bg-white cursor-pointer active:scale-95 hover:bg-gray-50"
              onClick={handleIncrease}
            >
              +
            </span>
          </div>
        </div>

        <span className="text-lg font-semibold w-1/4 text-center">
          ${numOfProd * cart.price}
        </span>

        <MdCancel
          className="text-lg text-red-700 absolute top-2 right-2 cursor-pointer"
          title="Remove Item from Cart"
          onClick={() => handleCartDelete(cart.id)}
        />
      </div>

      <div className="shadow-lg my-3 shadow-[#0000000D] lg:hidden flex flex-col gap-8 relative bg-white min-h-[267px] px-4 py-6">
        <span className="flex gap-6 items-center">
          <p className="text-base">Product:</p>
          <span className="flex gap-4 items-center">
            <span className="bg-[#F9F9F9] w-[88px]  flex justify-center items-center">
              <img src={cart.imageSrc} alt="" width={"52px"} />
            </span>
            <p className="text-romekan-text-300 text-[18px]">{cart.name}</p>
          </span>
        </span>
        <span className="flex gap-6 items-center">
          <p className="text-base">Pricing:</p>
          <p className="text-[14px]">${cart.price}</p>
        </span>
        <span className="flex gap-6 items-center">
          <p className="text-base">Quantity:</p>
          <div className="border rounded flex w-fit">
            <span
              className=" h-10 w-10 flex justify-center items-center bg-white cursor-pointer active:scale-95 hover:bg-gray-50"
              onClick={handleDecrease}
            >
              -
            </span>
            <span className=" h-10 w-10 flex justify-center items-center bg-[#D9D9D9]">
              {numOfProd}
            </span>
            <span
              className=" h-10 w-10 flex justify-center items-center bg-white cursor-pointer active:scale-95 hover:bg-gray-50"
              onClick={handleIncrease}
            >
              +
            </span>
          </div>
        </span>
        <span className="flex gap-6 items-center">
          <p className="text-base">Subtotal:</p>
          <p className="text-[14px]">${cart.price * cart.quantity}</p>
        </span>
        <MdCancel
          className="text-lg text-red-700 absolute top-2 right-2 cursor-pointer active:scale-95"
          title="Remove Item from Cart"
          onClick={() => handleCartDelete(cart.id)}
        />
      </div>
    </>
  );
};

export default CartCard;
