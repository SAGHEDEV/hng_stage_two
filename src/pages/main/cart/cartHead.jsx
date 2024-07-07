import React from "react";

const CartHead = () => {
  return (
    <div className="hidden w-full border lg:flex justify-between items-center px-10 py-5 rounded-xl mt-10 mb-5 ">
      <span className="text-2xl font-normal w-1/4 text-left ">Product</span>
      <span className="text-2xl font-normal w-1/4 text-center ">Price</span>
      <span className="text-2xl font-normal w-1/4 text-center">Quantity</span>
      <span className="text-2xl font-normal w-1/4 text-center">Subtotal</span>
    </div>
  );
};

export default CartHead;
