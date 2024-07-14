import { selector } from "recoil";
import { CartState } from "./state";

export const numOfCart = selector({
  key: "numOfCart",
  get: ({ get }) => {
    const ts = get(CartState);

    return ts.length;
  },
});
export const totalPrice = selector({
  key: "totalPrice",
  get: ({ get }) => {
    const tt = get(CartState);

    return tt.reduce((a, c) => {
      const productPrice = c.current_price[0].USD[0] * c.quantity;
      return a + productPrice;
    }, 0);
  },
});
