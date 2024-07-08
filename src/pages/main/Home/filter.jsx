import React, { useState } from "react";
import { MdOutlineArrowDropUp, MdOutlineArrowDropDown } from "react-icons/md";

const Filter = () => {
  const [filterState, setFilterState] = useState("Chairs");
  const [isOpen, setIsOpen] = useState(false);
  const filters = [
    {
      value: "Chairs",
      label: "Chairs",
    },
    {
      value: "Bed",
      label: "Bed",
    },
    {
      value: "Dining set",
      label: "Dining Set",
    },
    {
      value: "TV Cnsole",
      label: "TV Console",
    },
  ];
  return (
    <div className="flex justify-between items-center px-5 md:px-[50px] py-8 ">
      <div className="relative lg:hidden">
        <button
          className="w-40 py-3 border flex justify-between items-center px-3 rounded font-semibold lg:text-lg text-[#024E82]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {filterState}
          {!isOpen ? <MdOutlineArrowDropUp /> : <MdOutlineArrowDropDown />}
        </button>
        {isOpen ? (
          <div className="flex justify-center items-center flex-col bg-gray-100 mt-1 absolute gap-2 shadow-lg z-10">
            {filters.map((filter) => (
              <span
                className="w-44 h-10  flex justify-between items-center px-3 rounded hover:bg-gray-50 cursor-pointer"
                onClick={() => {
                  setFilterState(filter.value);
                  setIsOpen(false);
                }}
              >
                {filter.label}
              </span>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="hidden  lg:flex justify-center items-center md:gap-12 lg:gap-[77px]">
        {filters.map((filter) => (
          <span
            className={`hover:text-[#024E82] cursor-pointer ${
              filterState === filter.value
                ? "text-[#024E82] text-[20px] font-[500]"
                : "text-[14px]"
            }`}
            onClick={() => setFilterState(filter.value)}
          >
            {filter.label}
          </span>
        ))}
      </div>
      <button className="py-3 px-12 text-xs md:text-lg border rounded-sm hover:bg-gray-100/50 hover:text-[#024E82]">
        Filter
      </button>
    </div>
  );
};

export default Filter;
