import React, { useState } from "react";
import { MdOutlineArrowDropUp, MdOutlineArrowDropDown } from "react-icons/md";
import { handleCapitalize } from "../../../utilities/utils";

const Filter = ({ catData, setCategory, category, catLoad }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-between items-center px-5 md:px-[120px] py-8 ">
      <div className="relative lg:hidden">
        <button
          className="w-40 py-3 border flex justify-between items-center px-3 rounded font-semibold lg:text-lg text-[#024E82]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {catLoad ? "Loading..." : ""}
          {catData?.map((dat) => {
            if (dat.id === category) {
              return handleCapitalize(dat.name);
            }
          })}
          {!isOpen ? <MdOutlineArrowDropUp /> : <MdOutlineArrowDropDown />}
        </button>
        {isOpen ? (
          <div className="flex justify-center items-center flex-col bg-gray-100 mt-1 absolute gap-2 shadow-lg z-10">
            {catData.map((cat) => (
              <span
                key={cat.id}
                className="w-44 h-10  flex justify-between items-center px-3 rounded hover:bg-gray-50 cursor-pointer"
                onClick={() => {
                  setCategory(cat.id);
                  setIsOpen(false);
                }}
              >
                {handleCapitalize(cat.name)}
              </span>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="hidden  lg:flex justify-center items-center md:gap-12 lg:gap-[77px]">
        {catLoad ? "Loading..." : ""}
        {catData?.map((filter) => (
          <span
            className={`hover:text-[#024E82] cursor-pointer ${
              category === filter.id
                ? "text-[18px] text-[#024E82] font-semibold"
                : "text-[14px]"
            }`}
            onClick={() => {
              setCategory(filter.id);
            }}
          >
            {handleCapitalize(filter.name)}
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
