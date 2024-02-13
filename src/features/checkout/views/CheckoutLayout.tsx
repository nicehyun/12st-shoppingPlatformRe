import CheckoutForm from "./CheckoutForm"
import CheckoutClauseSection from "./checkoutClause/CheckoutClauseSection"
import CouponAndMileSection from "./couponAndMile/CouponAndMileSection"
import DeliveryInfoSection from "./delivery/DeliveryInfoSection"
import PaymentSection from "./payment/PaymentSection"
import TotalPriceSection from "./priceInfo/TotalPriceSection"
import CheckoutPendingProductSection from "./productList/CheckoutPendingProductSection"

const CheckoutLayout = () => {
  return (
    <CheckoutForm>
      <DeliveryInfoSection />
      <CheckoutPendingProductSection />
      <CouponAndMileSection />
      <PaymentSection />
      <TotalPriceSection />
      <CheckoutClauseSection />
    </CheckoutForm>
  )
}

export default CheckoutLayout
