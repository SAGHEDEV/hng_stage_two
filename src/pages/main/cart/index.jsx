import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import CartCard from "./cartCard";
import CartHead from "./cartHead";
import CartCheckout from "./cartCheckout";
import { CartData } from "../../../utilities/products";
import { total } from "../../../utilities/utils";

const CartPage = () => {
  const [carts, setCarts] = useState(CartData);
  const handleCartDelete = (deleteId) => {
    const newCarts = carts.filter((cart) => cart.id !== deleteId);
    setCarts(newCarts);
  };

  return (
    <div className="px-5 md:px-[120px] py-8">
      <span className="font-light opacity-50">
        Home <span className="font-semibold opacity-100">/ Cart</span>
      </span>
      <div>
        <CartHead />
        <div className="my-10">
          {carts.length ? (
            carts.map((cart) => (
              <CartCard
                cart={cart}
                key={cart.cart}
                handleCartDelete={handleCartDelete}
              />
            ))
          ) : (
            <p className="font-semibold text-lg text-center">
              Cart is empty. Kindly return to store to add something to Cart
            </p>
          )}
        </div>

        <div className="w-full flex justify-center lg:justify-start items-center lg:items-start">
          <Link to="/">
            <button className="font-medium self-center lg:self-left text-[16px] h-[56px] px-5 rounded-md  border border-[#024E82] mt-5 hover:bg-[#024E82] hover:text-white">
              Return to store
            </button>
          </Link>
        </div>
      </div>
      <CartCheckout total={total} />
    </div>
  );
};

export default CartPage;
