import { CartData } from "./products";
export const isEqual = (a, b) => a === b;

export const isPart = (a, b) => a.includes(b);

export const API_ID = "Z1AFQ22T5JX46QQ";
export const ORG_ID = "518ba76aea7f42bdbddf4fa73c09efe0";
export const API_KEY = "785aff84d83d4f26aa5774975a91501a20240712154945613049";

export const total = CartData.reduce((a, c) => {
  let productPrice = Number(c.price) * Number(c.quantity);
  return a + Number(productPrice);
}, 0);

export const handleCapitalize = (data) => {
  return (
    String(data || "")
      ?.charAt(0)
      ?.toUpperCase() + String(data || "")?.slice(1)
  );
};
