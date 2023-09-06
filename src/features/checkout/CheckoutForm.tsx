import CheckoutCouponAndMile from "./CheckoutCouponAndMile"
import CheckoutOrderListInfo from "./CheckoutOrderListInfo"
import DeliveryInfo from "./DeliveryInfo"

const CheckoutForm = () => {
  return (
    <form>
      <DeliveryInfo />
      <CheckoutOrderListInfo />
      <CheckoutCouponAndMile />
    </form>
  )
}

export default CheckoutForm
