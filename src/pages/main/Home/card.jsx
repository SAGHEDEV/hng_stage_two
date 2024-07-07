import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const ProductCard = () => {
  return (
    <div className=" hover:border rounded-lg overflow-hidden product-card relative">
      <div className="flex justify-center items-center w-full bg-[#F9F9F9] p-10">
        <img
          src="https://s3-alpha-sig.figma.com/img/c577/a797/f06209ddc5cd291b8fef7062f75212e0?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TO7gONU9JM-OxCA3QjY1F5YUtvcmg1DxrgMCIim9-4~jPuYz9fLs6gWUqbu4NUn1tuPLLDigWaL0-IYje3tb4QDftLZzTkWJrYgHUDEKdakLe8JKIIyAB7b1IHqf4Yw4eORGsdVFtfk2caC6x2Gga33NwGxYmKzZ64-JaojIHLe854fsJvrOdrlw-G3lEpVEoMbLOCyiTeOgi-vbJtkvOPpbOWDy7l-9AypBXQx~sD0dKOTW58KS4pvp49J-dE~gdpgo3KMerjhagdOoMHEHQkaY-t2oKULcZAJ9i1x-PWkzHQ3FXcPU6lBLpcptwmAb6TCse2uWJLtTh~Lv2ImdPQ__"
          alt=""
          className="h-[100%] lg:h-40 product-img"
        />
      </div>
      <div className="p-5">
        <p className="text-[14px] lg:text-[18px] font-normal pb-3 hover:underline cursor-pointer hover:text-[#024E82]">
          White Classy Chair
        </p>
        <div className="flex justify-between items-center ">
          <p>
            <span className="font-medium text-[16px] lg:text-[24px] pr-2">
              $64
            </span>
            <span className="font-medium text-[10px] lg:text-[20px] text-[#BABABA]">
              $120
            </span>
          </p>
          <div className="p-2 bg-[#024E82] rounded-full text-white cursor-pointer hover:opacity-80">
            <FaShoppingCart className="text-[12px] lg:text-[18px]" />
          </div>
        </div>
      </div>
      <span className="absolute top-1 right-1 px-2 py-1 bg-[#652A0E] text-white text-xs rounded-md">
        -30%
      </span>
    </div>
  );
};

export default ProductCard;
