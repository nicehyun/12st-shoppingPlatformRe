"use client"

import CheckoutClause from "./CheckoutClause"
import CheckoutCouponAndMile from "./CheckoutCouponAndMile"
import CheckoutOrderListInfo from "./CheckoutOrderListInfo"
import CheckoutTotalPriceInfo from "./CheckoutTotalPriceInfo"
import DeliveryInfo from "./DeliveryInfo"
import CheckoutButton from "./CheckoutButton"
import CheckoutPayment from "./CheckoutPayment"
import { useCheckoutMutaion } from "../hooks/useCheckoutMutaion"

const CheckoutForm = () => {
  const { checkoutMutateAsync, isCheckoutLoading } = useCheckoutMutaion()

  return (
    <form onSubmit={checkoutMutateAsync} className="max-w-[800px] mx-auto">
      <DeliveryInfo />
      <CheckoutOrderListInfo />
      <CheckoutCouponAndMile />
      <CheckoutPayment />
      <CheckoutTotalPriceInfo />
      <CheckoutClause />
      <CheckoutButton isCheckoutLoading={isCheckoutLoading} />
    </form>
  )
}

export default CheckoutForm
