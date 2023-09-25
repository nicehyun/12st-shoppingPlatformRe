import { FaEquals, FaPlus } from "react-icons/fa"
import useCheckoutPrice from "../hooks/useCheckoutPrice"
import CartPriceInfoEl from "./CartPriceInfoEl"
import CartPriceInfoHeaderEl from "./CartPriceInfoHeaderEl"
import CartPriceOperation from "./CartPriceOperation"

const CartPriceInfo = () => {
  const { totalDeliveryFee, totalPriceOfCheckedProduct } = useCheckoutPrice()

  return (
    <section className="mt-[50px] border-t-[3px] border-b-[1px] border-black dark:border-white">
      <div className="border-b-[1px] border-border flex">
        <CartPriceInfoHeaderEl headerContent="총 주문금액" />
        <CartPriceInfoHeaderEl headerContent="총 배송비" />
        <CartPriceInfoHeaderEl headerContent="총 결제금액" />
      </div>

      <div className="py-[50px] flex relative ">
        <CartPriceInfoEl price={totalPriceOfCheckedProduct} />

        <CartPriceInfoEl price={totalDeliveryFee} />
        <CartPriceInfoEl
          price={totalPriceOfCheckedProduct + totalDeliveryFee}
        />

        <CartPriceOperation
          icon={<FaPlus />}
          classNames="left-1/3 -translate-x-1/2"
        />
        <CartPriceOperation
          icon={<FaEquals />}
          classNames="right-1/3 translate-x-1/2"
        />
      </div>
    </section>
  )
}

export default CartPriceInfo
