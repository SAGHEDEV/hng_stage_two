import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { atom } from "recoil";

export const API =
  "/api/products?organization_id=518ba76aea7f42bdbddf4fa73c09efe0&reverse_sort=true&page=1&size=10&Appid=Z1AFQ22T5JX46QQ&Apikey=785aff84d83d4f26aa5774975a91501a20240712154945613049";

export const CartState = atom({
  key: "CartState",
  default: [],
});
export const ProductState = atom({
  key: "Products",
  default: {
    loading: null,
    data: [],
  },
});
