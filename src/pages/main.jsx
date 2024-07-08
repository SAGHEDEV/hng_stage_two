import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import HomePage from "./main/Home/index";
import CartPage from "./main/cart/index";
import CheckOut from "./main/checkout";

const Main = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/cart/checkout" element={<CheckOut />} />
        <Route index element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Main;
