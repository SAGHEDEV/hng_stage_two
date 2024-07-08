import React from "react";
import Hero from "./hero";
import Filter from "./filter";
import ProductCard from "./card";
import CountNavig from "./countNavig";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Filter />
      <div className="px-5 md:px-[50px] py-8 grid grid-cols-2 lg:grid-cols-3 md:grid-cols-2 gap-5 lg:gap-10">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <CountNavig />
    </div>
  );
};

export default HomePage;
