import React from "react";

const Card = () => {
  return (
    <div>
      <div className="pl-3 pr-6 py-2 flex justify-between items-center bg-white rounded-md mb-3">
        <div className="flex gap-4 items-center">
          <span className="bg-gray-100 w-[88px]  flex justify-center items-center">
            <img
              src="https://images.unsplash.com/photo-1611967164521-abae8fba4668?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              width={"40px"}
            />
          </span>
          <span className="flex justify-between items-start flex-col gap-3">
            <p className="text-romekan-text-300 text-[18px]">Red Chair</p>
            <p className="text-romekan-text-300 text-[16px]">Quantity : 2</p>
          </span>
        </div>

        <p className="font-medium text-[16px] lg:text-[18px] ">$50</p>
      </div>
    </div>
  );
};

export default Card;
