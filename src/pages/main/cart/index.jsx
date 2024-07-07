import React from "react";
import { useLocation } from "react-router-dom";
import CartCard from "./cartCard";
import CartHead from "./cartHead";
import CartCheckout from "./cartCheckout";

const CartPage = () => {
  const { pathname } = useLocation();
  return (
    <div className="px-5 md:px-[100px] py-8">
      <span className="font-light">
        Home <span className="font-semibold">{pathname}</span>
      </span>
      <div>
        <CartHead />
        <div className="my-10">
          <CartCard />
        </div>

        <div className="w-full flex justify-center items-center lg:items-start">
          <button className="font-medium self-center lg:self-left text-[16px] h-[56px] px-5 rounded-md  border border-[#024E82] mt-5 hover:bg-[#024E82] hover:text-white">
            Return to store
          </button>
        </div>
      </div>
      <CartCheckout />
    </div>
  );
};

export default CartPage;
