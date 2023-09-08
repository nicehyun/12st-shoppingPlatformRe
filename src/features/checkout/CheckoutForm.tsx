import CheckoutClause from "./CheckoutClause"
import CheckoutCouponAndMile from "./CheckoutCouponAndMile"
import CheckoutOrderListInfo from "./CheckoutOrderListInfo"
import CheckoutPayment from "./CheckoutPayment"
import CheckoutPaymentAmountInfo from "./CheckoutPaymentAmountInfo"
import DeliveryInfo from "./DeliveryInfo"

const CheckoutForm = () => {
  return (
    <form>
      <DeliveryInfo />
      <CheckoutOrderListInfo />
      <CheckoutCouponAndMile />
      <CheckoutPayment />
      <CheckoutPaymentAmountInfo />
      <CheckoutClause />
    </form>
  )
}

export default CheckoutForm
