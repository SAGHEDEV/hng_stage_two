import React from "react";

const CountNavig = ({ page, setPage }) => {
  const pages = [1, 2, 3, 4, 5];
  return (
    <div className="flex justify-center items-center gap-3 m-12">
      {pages.map((pager) => (
        <div
          onClick={() => setPage(pager)}
          className={`w-12 h-12 flex justify-center items-center text-semibold  border-2 cursor-pointer hover:opacity-90 hover:bg-[#024E82] border-[#024E82] ${
            page === pager ? "text-white bg-[#024E82]" : ""
          }  rounded text-lg`}
        >
          {pager}
        </div>
      ))}
    </div>
  );
};

export default CountNavig;
