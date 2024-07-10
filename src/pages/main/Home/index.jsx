import React, { useState } from "react";
import Hero from "./hero";
import Filter from "./filter";
import ProductCard from "./card";
import CountNavig from "./countNavig";
import {
  BedList,
  ChairList,
  consoleList,
  diningList,
} from "../../../utilities/products";

const HomePage = () => {
  const [filterState, setFilterState] = useState("Chairs");
  const [currentProduct, setCurrentProduct] = useState(ChairList);
  const filters = [
    {
      value: "Chairs",
      label: "Chairs",
      target: ChairList,
    },
    {
      value: "Bed",
      label: "Bed",
      target: BedList,
    },
    {
      value: "Dining set",
      label: "Dining Set",
      target: diningList,
    },
    {
      value: "TV Cnsole",
      label: "TV Console",
      target: consoleList,
    },
  ];
  return (
    <div>
      <Hero />
      <Filter
        filters={filters}
        filterState={filterState}
        setFilterState={setFilterState}
        setCurrentProduct={setCurrentProduct}
      />
      <div className="px-5 md:px-[120px] py-8 grid grid-cols-2 lg:grid-cols-3 md:grid-cols-2 gap-5 lg:gap-10 blur-in2">
        {currentProduct.map((chair) => (
          <ProductCard chair={chair} key={chair.id} />
        ))}
      </div>
      <CountNavig />
    </div>
  );
};

export default HomePage;
