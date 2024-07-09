import React from "react";

const Card = ({ cart }) => {
  return (
    <div>
      <div className="pl-3 pr-4 py-2 flex justify-between items-center bg-white rounded-md mb-3">
        <div className="flex gap-4 items-center">
          <span className="bg-gray-100 w-[88px]  flex justify-center items-center">
            <img src={cart.imageSrc} alt="" width={"40px"} />
          </span>
          <span className="flex justify-between items-start flex-col gap-3">
            <p className="text-romekan-text-300 text-[16px]">{cart.name}</p>
            <p className="text-romekan-text-300 text-[16px]">{cart.quantity}</p>
          </span>
        </div>

        <p className="font-medium text-[16px] lg:text-[18px] ">${cart.price}</p>
      </div>
    </div>
  );
};

export default Card;
