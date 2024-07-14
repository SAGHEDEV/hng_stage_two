import React from "react";
import Card from "./card";
import { Link } from "react-router-dom";
// import { total } from "../../../utilities/utils";
import { Form } from "antd";
import { useRecoilValue } from "recoil";
import { CartState } from "../../../utilities/management/state";
import { totalPrice } from "../../../utilities/management/setter";

const OrderSummary = () => {
  const cartState = useRecoilValue(CartState);
  const total = useRecoilValue(totalPrice);
  console.log(cartState);
  return (
    <div>
      <p className="font-medium text-[18px] lg:text-[24px] text-center mb-5">
        Order Summary
      </p>

      <div className="my-12">
        {cartState?.map((cart) => (
          <Card cart={cart} />
        ))}
      </div>

      <p className="text-[20px] font-medium mt-8">Cart Total</p>
      <div className="mt-5 flex flex-col justify-center items-center">
        <p className="flex justify-between items-center w-full text-[16px]">
          <span>Subtotal</span>
          <span>${total}</span>
        </p>
        <div className="w-full p-[1px] bg-gray-200 my-5"></div>
        <p className="flex justify-between items-center w-full text-[16px]">
          <span>Shipping</span>
          <span>Free</span>
        </p>
        <div className="w-full p-[1px] bg-gray-200 my-5"></div>
        <p className="flex justify-between items-center w-full text-[16px]">
          <span>Total</span>
          <span>${total || 0}</span>
        </p>
      </div>

      <div className="mt-10">
        <p className="font-medium text-[16px] lg:text-[24px] text-center mb-5">
          Payment Option
        </p>
        <div className="my-6 flex justify-start gap-3">
          <Form.Item name="payment_option">
            <input type="radio" name="payment-option" id="" required />
          </Form.Item>
          <p className="flex flex-col text-black">
            <span className="text-sm lg:text-[16px] pb-1">
              Cash on Delivery
            </span>
            <span className="text-[12px] lg:text-[14px] font-extralight">
              Pay with cash upon delivery.
            </span>
          </p>
        </div>
        <div className="my-10">
          <p className="text-[14px] lg:text-[18px]">Review & Place Order</p>
          <p className="text-[12px] lg:text-[14px] font-extralight pt-1">
            Please review the order details and payment details before
            proceeding to confirm your order{" "}
          </p>
        </div>
        <div className="flex justify-start gap-4">
          <Form.Item name="agree">
            <input type="checkbox" name="agree" id="" required />
          </Form.Item>
          <p className="text-[12px] lg:text-[16px]">
            I agree to the{" "}
            <Link className="text-[#024E82]">Terms & conditions </Link>,
            <Link className="text-[#024E82]">Privacy policy </Link>&{" "}
            <Link className="text-[#024E82]">Return policy</Link>.
          </p>
        </div>

        <div className="flex justify-center items-center my-10">
          <button
            className="font-normal text-[16px]  h-[58px] px-5 text-white rounded-lg bg-[#024E82] ml-3 mt-5 self-center hover:opacity-90"
            type="submit"
          >
            Confirm Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
