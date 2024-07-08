import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import HomePage from "./pages/main/Home";
import CartPage from "./pages/main/cart/index";
import CheckOut from "./pages/main/checkout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/cart/checkout" element={<CheckOut />} />
          <Route index element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
