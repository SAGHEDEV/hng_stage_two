import { CartData } from "./products";
export const isEqual = (a, b) => a === b;

export const isPart = (a, b) => a.includes(b);

export const total = CartData.reduce((a, c) => {
  let productPrice = Number(c.price) * Number(c.quantity);
  return a + Number(productPrice);
}, 0);
