"use client"

import CheckoutClauseSection from "./checkoutClause/CheckoutClauseSection"
import CouponAndMileSection from "./couponAndMile/CouponAndMileSection"
import TotalPriceSection from "./priceInfo/TotalPriceSection"
import DeliveryInfoSection from "./delivery/DeliveryInfoSection"
import CheckoutButton from "./CheckoutButton"
import PaymentSection from "./payment/PaymentSection"
import { useCheckoutMutaion } from "../hooks/useCheckoutMutaion"
import CheckoutPendingProductSection from "./productList/CheckoutPendingProductSection"

const CheckoutForm = () => {
  const { checkoutMutateAsync, isCheckoutLoading } = useCheckoutMutaion()

  return (
    <form onSubmit={checkoutMutateAsync} className="max-w-[800px] mx-auto">
      <DeliveryInfoSection />
      <CheckoutPendingProductSection />
      <CouponAndMileSection />
      <PaymentSection />
      <TotalPriceSection />
      <CheckoutClauseSection />
      <CheckoutButton isCheckoutLoading={isCheckoutLoading} />
    </form>
  )
}

export default CheckoutForm
