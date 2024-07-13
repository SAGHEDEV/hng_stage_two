import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { ImCancelCircle } from "react-icons/im";

const ProdDetail = ({ currentDet, detShow, setDetShow, AddToCart, carts }) => {
  console.log(currentDet?.photos);
  return (
    <div
      className={`w-full lg:w-[100vh] h-[100%] fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center p-4 ${
        detShow ? "block" : "hidden"
      }`}
    >
      <div className="w-[100%] h-[100%] fixed top-0 left-0 right-0 bottom-0 bg-black/30"></div>
      <div className="bg-white lg:p-10 rounded-md z-20 self-center relative lg:left-[50%] lg:right-[50%]  lg:w-[1400px] mt-20 p-4 overflow-y-scroll">
        <span
          className="absolute top-3 right-3 cursor-pointer active:scale-75"
          onClick={() => setDetShow(false)}
        >
          <ImCancelCircle size={20} />
        </span>
        <div className="flex flex-col lg:flex-row justify-center lg:justify-around gap-6 lg:gap-12 items-center lg:items-start w-full">
          <div className="flex justify-start lg:w-2/6 gap-4 lg:block">
            <img
              src={`https://api.timbu.cloud/images/${currentDet?.photos[0].url}`}
              alt={currentDet?.name}
              className="border-4 border-[#024E82]/50 rounded-lg shadow-md w-full max-w-[200px]"
            />
            <div className="flex flex-col lg:flex-row justify-center  lg:justify-start items-center gap-2x my-5">
              {currentDet?.photos.map((photo) => (
                <div className="border-4 border-gray-200/30 w-fit">
                  <img
                    src={`https://api.timbu.cloud/images/${photo?.url}`}
                    className="h-12 cursor-pointer active:scale-95"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-4/6">
            <p className="text-center lg:text-left text-[20px] lg:text-[28px] font-bold">
              {currentDet?.name}.
            </p>
            <p className="text-[14px] lg:text-[16px] font-normal my-3 text-center lg:text-left line-clamp-[7]">
              {currentDet?.description}
            </p>
            <hr />
            <p className="space-y-2 flex justify-between my-2">
              <span className="font-bold text-[16px] lg:text-[20px]">
                ${currentDet?.current_price[0].USD[0]}
              </span>
              <span className="font-bold text-[14px] lg:text-[16px] line-through text-[#BABABA]">
                ${currentDet?.current_price[0].USD[1]}
              </span>
            </p>
            <hr />
          </div>
        </div>

        <button
          onClick={() => AddToCart(currentDet)}
          className="m-auto flex font-normal text-[16px] justify-center items-center gap-3 w-full py-3 text-white rounded-lg bg-[#024E82] mt-5 self-center hover:opacity-90 active:scale-95"
        >
          <FaShoppingCart className="text-[12px] lg:text-[18px]" /> Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProdDetail;
