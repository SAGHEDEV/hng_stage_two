import React, { useState } from "react";
import CheckOutForm from "./checkOutForm";
import OrderSummary from "./ordersummery";
import Modal from "./modal";

const CheckOut = () => {
  const [show, setShow] = useState(false);

  const handleShowConfirm = () => {
    setShow(true);
  };
  const hideConfirm = () => {
    setShow(false);
  };
  return (
    <>
      <div className="w-full py-8 flex flex-col lg:flex-row justify-between items-start gap-28 relative">
        <div className="w-full lg:w-2/3 pl-10 pr-10 lg:pl-[50px]">
          <span className="font-light opacity-50">
            Home / Cart
            <span className="font-semibold opacity-100"> / Checkout</span>
          </span>
          <CheckOutForm />
        </div>
        <div className="w-full lg:w-1/3 pl-10 pr-10 lg:pr-[50px] bg-gray-100 py-5 rounded-l-md">
          <OrderSummary handleShowConfirm={handleShowConfirm} />
        </div>
      </div>
      <Modal hideConfirm={hideConfirm} show={show} />
    </>
  );
};

export default CheckOut;
