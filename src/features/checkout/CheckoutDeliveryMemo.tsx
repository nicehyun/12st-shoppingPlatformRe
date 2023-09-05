import CheckoutInputLayout from "./CheckoutInputLayout"
import DeliveryMemoSelect from "./DeliveryMemoSelect"

const CheckoutDeliveryMemo = () => {
  return (
    <CheckoutInputLayout label="요청사항" id="deliveryMemo">
      <DeliveryMemoSelect />
    </CheckoutInputLayout>
  )
}

export default CheckoutDeliveryMemo
