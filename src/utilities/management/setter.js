import { selector } from "recoil";
import { CartState } from "./state";

export const numOfCart = selector({
  key: "numOfCart",
  get: ({ get }) => {
    const ts = get(CartState);

    return ts.length;
  },
});
