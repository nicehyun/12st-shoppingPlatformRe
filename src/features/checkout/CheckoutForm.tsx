import CheckoutCouponAndMile from "./CheckoutCouponAndMile"
import CheckoutOrderListInfo from "./CheckoutOrderListInfo"
import CheckoutPayment from "./CheckoutPayment"
import DeliveryInfo from "./DeliveryInfo"

const CheckoutForm = () => {
  return (
    <form>
      <DeliveryInfo />
      <CheckoutOrderListInfo />
      <CheckoutCouponAndMile />
      <CheckoutPayment />
    </form>
  )
}

export default CheckoutForm
