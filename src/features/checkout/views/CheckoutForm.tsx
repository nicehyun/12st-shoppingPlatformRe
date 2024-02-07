"use client"

import CheckoutClause from "./CheckoutClause"
import CouponAndMileLayout from "./couponAndMile/CouponAndMileLayout"
import CheckoutTotalPriceInfo from "./CheckoutTotalPriceInfo"
import DeliveryInfo from "./delivery/DeliveryInfo"
import CheckoutButton from "./CheckoutButton"
import CheckoutPayment from "./CheckoutPayment"
import { useCheckoutMutaion } from "../hooks/useCheckoutMutaion"
import CheckoutPendingProductLayout from "./productList/CheckoutPendingProductLayout"

const CheckoutForm = () => {
  const { checkoutMutateAsync, isCheckoutLoading } = useCheckoutMutaion()

  return (
    <form onSubmit={checkoutMutateAsync} className="max-w-[800px] mx-auto">
      <DeliveryInfo />
      <CheckoutPendingProductLayout />
      <CouponAndMileLayout />
      <CheckoutPayment />
      <CheckoutTotalPriceInfo />
      <CheckoutClause />
      <CheckoutButton isCheckoutLoading={isCheckoutLoading} />
    </form>
  )
}

export default CheckoutForm
