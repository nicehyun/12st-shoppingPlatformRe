"use client"

import { FaEquals, FaPlus } from "react-icons/fa"
import useCheckoutPrice from "../../checkout/hooks/useCheckoutPrice"
import CartPriceInfoEl from "./CartPriceInfoEl"
import CartPriceInfoHeaderEl from "./CartPriceInfoHeaderEl"
import CartPriceOperation from "./CartPriceOperation"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { useEffect } from "react"
import { selectCheckedProductList } from "@/redux/features/cartSlice"
import { addCheckoutPendingProductList } from "@/redux/features/checkoutSlice"

const CartPriceInfo = () => {
  const { totalDeliveryFee, totalPriceOfCheckedProduct } = useCheckoutPrice()
  const checkedProductList = useAppSelector(selectCheckedProductList)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(addCheckoutPendingProductList(checkedProductList))
  }, [checkedProductList])

  return (
    <section className="mt-[50px] border-t-[3px] border-b-[1px] border-black dark:border-white sm:flex md:flex sm:h-[300px] md:h-[350px]">
      <div className="border-b-[1px] border-border sm:border-r-[1px] md:border-r-[1px] flex sm:block md:block sm:w-1/3 md:w-1/3">
        <CartPriceInfoHeaderEl headerContent="총 주문금액" />
        <CartPriceInfoHeaderEl headerContent="총 배송비" />
        <CartPriceInfoHeaderEl headerContent="총 결제금액" />
      </div>

      <div className="relative py-[50px] sm:py-0 md:py-0 flex md:block sm:block sm:w-2/3 md:w-2/3">
        <CartPriceInfoEl price={totalPriceOfCheckedProduct} />

        <CartPriceInfoEl price={totalDeliveryFee} />
        <CartPriceInfoEl
          price={totalPriceOfCheckedProduct + totalDeliveryFee}
        />

        <CartPriceOperation
          icon={<FaPlus />}
          classNames="left-1/3 -translate-x-1/2 top-1/2 -translate-y-1/2 sm:left-1/2 sm:top-1/3 md:left-1/2 md:top-1/3"
        />
        <CartPriceOperation
          icon={<FaEquals />}
          classNames="right-1/3 translate-x-1/2 top-1/2 -translate-y-1/2 sm:right-1/2 sm:top-2/3 md:right-1/2 md:top-2/3"
        />
      </div>
    </section>
  )
}

export default CartPriceInfo
