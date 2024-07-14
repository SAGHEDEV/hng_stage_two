import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import CartCard from "./cartCard";
import CartHead from "./cartHead";
import CartCheckout from "./cartCheckout";
import { total } from "../../../utilities/utils";
import { useRecoilState, useRecoilValue } from "recoil";
import { CartState } from "../../../utilities/management/state";

const CartPage = () => {
  const [carts, setCarts] = useRecoilState(CartState);

  const handleCartDelete = (deleteId) => {
    const newCarts = carts.filter((cart) => cart.id !== deleteId);
    setCarts(newCarts);
  };

  const handleIncrease = (cartId) => {
    setCarts((prevCartItems) => {
      const foundItemIndex = prevCartItems.findIndex(
        (item) => item.id === cartId.id
      );
      console.log(foundItemIndex);
      if (foundItemIndex !== -1) {
        // Item found, update its quantity

        const updatedItem = {
          ...prevCartItems[foundItemIndex],
          quantity: cartId.quantity + 1,
          subtotal: cartId.current_price[0].USD[0] * (cartId.quantity + 1),
        };
        console.log(updatedItem);
        return [
          ...prevCartItems.slice(0, foundItemIndex),
          updatedItem,
          ...prevCartItems.slice(foundItemIndex + 1),
        ];
      } else {
        // Item not found, handle scenario (e.g., error message)
        return prevCartItems;
      }
    });
  };
  const handleDecrease = (cartId) => {
    setCarts((prevCartItems) => {
      const foundItemIndex = prevCartItems.findIndex(
        (item) => item.id === cartId.id
      );
      console.log(foundItemIndex);
      if (foundItemIndex !== -1 && cartId.quantity > 1) {
        // Item found, update its quantity

        const updatedItem = {
          ...prevCartItems[foundItemIndex],
          quantity: cartId.quantity - 1,
          subtotal: cartId.current_price[0].USD[0] * (cartId.quantity - 1),
        };
        console.log(updatedItem);
        return [
          ...prevCartItems.slice(0, foundItemIndex),
          updatedItem,
          ...prevCartItems.slice(foundItemIndex + 1),
        ];
      } else {
        // Item not found, handle scenario (e.g., error message)
        return prevCartItems;
      }
    });
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
                // key={cart.id}
                handleCartDelete={handleCartDelete}
                handleIncrease={handleIncrease}
                handleDecrease={handleDecrease}
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
      <button onClick={() => handleIncrease(carts[0])}>button</button>
      <CartCheckout total={total} />
    </div>
  );
};

export default CartPage;
