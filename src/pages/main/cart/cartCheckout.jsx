import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { totalPrice } from "../../../utilities/management/setter";

const CartCheckout = () => {
  const total = useRecoilValue(totalPrice);

  return (
    <div className="mt-16 flex flex-col justify-between items-center lg:items-start lg:flex-row gap-16">
      <div className="w-full lg:w-1/2  lg:sticky top-24">
        <form className="w-full flex justify-start items-center flex-col lg:flex-row gap-6">
          <input
            type="text"
            required
            placeholder="Coupon code"
            className="w-full h-[47px] lg:w-[300px] lg:h-[56px] p-3 rounded border border-[#024E82]"
          />
          <button
            className="font-normal text-[16px] h-[47px]  lg:h-[56px] px-5 text-white rounded bg-[#024E82] hover:opacity-90"
            type="submit"
          >
            Activate Coupon
          </button>
        </form>
      </div>

      <div className="border-t lg:border p-5 lg:rounded-2xl w-full lg:w-2/5">
        <p className="text-[20px] font-medium">Checkout</p>
        <div className="mt-5 flex flex-col justify-center items-center">
          <p className="flex justify-between items-center w-full text-[16px]">
            <span>Subtotal</span>
            <span>${total}</span>
          </p>
          <div className="w-full p-[1px] bg-gray-200 my-5"></div>
          <p className="flex justify-between items-center w-full text-[16px]">
            <span>Shipping</span>
            <span>Free</span>
          </p>
          <div className="w-full p-[1px] bg-gray-200 my-5"></div>
          <p className="flex justify-between items-center w-full text-[16px]">
            <span>Total</span>
            <span>${total || 0}</span>
          </p>
          <Link to={total ? "/cart/checkout" : "/cart"}>
            <button
              className="font-normal text-[16px]  h-[58px] px-5 text-white rounded-lg bg-[#024E82] ml-3 mt-5 self-center hover:opacity-90"
              type="submit"
              disabled={!total}
            >
              Proceed to Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartCheckout;
