import React, { useEffect, useState } from "react";
import Hero from "./hero";
import Filter from "./filter";
import ProductCard from "./card";
import CountNavig from "./countNavig";
import { useRecoilState } from "recoil";
import { ProductState, CartState } from "../../../utilities/management/state";
import { fetchProduct, fetchCategory } from "../../../utilities/requestType";
import { Spin, notification } from "antd";
import { API_ID, API_KEY, ORG_ID } from "../../../utilities/utils";
import ProdDetail from "./ProdDetail";

const HomePage = () => {
  const [page, setPage] = useState(1);
  const [currentDet, setCurrentDet] = useState();
  const [category, setCategory] = useState("54a6e5de079543a8b40a2959fbb157c1");
  const API = `/api/products?organization_id=${ORG_ID}&category_id=${category}&reverse_sort=true&page=${page}&size=10&Appid=${API_ID}&Apikey=${API_KEY}`;
  const API2 = `/api/categories?organization_id=${ORG_ID}&reverse_sort=true&page=1&size=10&Appid=${API_ID}&Apikey=${API_KEY}`;
  const [currentProduct, setCurrentProduct] = useRecoilState(ProductState);
  const [carts, setCart] = useRecoilState(CartState);
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
  const [detShow, setDetShow] = useState(false);

  const AddToCart = (prod) => {
    if (carts?.some((e) => e?.prod.name === prod.name)) {
      notification.info({
        message: "",
        description: "Product Already in Cart",
      });
    } else {
      setCart((prevState) => {
        const newCart = [...prevState, { prod }];
        return newCart;
      });
      notification.success({
        message: "Success!",
        description: "Product Added to cart successfully",
      });
    }
  };
  const {
    data: catData,
    isLoading: catLoad,
    error: catErr,
  } = fetchCategory(API2);

  const handleProductDet = (prod) => {
    setDetShow(true);
    setCurrentDet(prod);
  };

  const {
    data: prodData,
    isLoading: prodLoad,
    error: prodErr,
    refetch: proRefetch,
  } = fetchProduct(API);

  useEffect(() => {
    setCurrentProduct(prodData);
    proRefetch();
  }, [prodData, category, page]);

  return (
    <div className="relative">
      <Hero />
      <Filter
        catData={catData}
        catLoad={catLoad}
        setCategory={setCategory}
        refetch={proRefetch}
        category={category}
      />
      <div className="px-5 md:px-[120px] py-8 grid grid-cols-2 lg:grid-cols-3 md:grid-cols-2 gap-5 lg:gap-10 blur-in2 relative">
        {prodLoad ? (
          <div className="absolute flex justify-center items-center w-full h-full p-16">
            <Spin size="large"></Spin>
          </div>
        ) : (
          currentProduct?.map((chair) => (
            <ProductCard
              chair={chair}
              key={chair.id}
              AddToCart={AddToCart}
              handleProductDet={handleProductDet}
            />
          ))
        )}
      </div>
      <CountNavig page={page} setPage={setPage} />
      <ProdDetail
        carts={carts}
        currentDet={currentDet}
        detShow={detShow}
        setDetShow={setDetShow}
        AddToCart={AddToCart}
      />
    </div>
  );
};

export default HomePage;
