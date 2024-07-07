import React from "react";

const CountNavig = () => {
  return (
    <div className="flex justify-center items-center gap-3 m-12">
      <div className="w-12 h-12 flex justify-center items-center text-semibold text-white border-2 cursor-pointer hover:opacity-90 hover:bg-[#024E82] border-[#024E82] bg-[#024E82] rounded text-lg">
        1
      </div>
      <div className="w-12 h-12 flex justify-center items-center text-semibold border-2 cursor-pointer hover:opacity-90 hover:bg-[#024E82] hover:text-white border-[#024E82] rounded text-lg">
        2
      </div>
      <div className="w-12 h-12 flex justify-center items-center text-semibold border-2 cursor-pointer hover:opacity-90 hover:bg-[#024E82] hover:text-white border-[#024E82] rounded text-lg">
        3
      </div>
      <div className="w-12 h-12 flex justify-center items-center text-semibold border-2 cursor-pointer hover:opacity-90 hover:bg-[#024E82] hover:text-white border-[#024E82] rounded text-lg">
        4
      </div>
      <div className="w-12 h-12 flex justify-center items-center text-semibold border-2 cursor-pointer hover:opacity-90 hover:bg-[#024E82] hover:text-white border-[#024E82] rounded text-lg">
        5
      </div>
    </div>
  );
};

export default CountNavig;
