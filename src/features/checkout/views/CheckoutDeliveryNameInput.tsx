import CheckoutInputLayout from "./CheckoutInputLayout"

const CheckoutDeliveryNameInput = () => {
  return (
    <CheckoutInputLayout
      label="배송지명"
      id="deliveryName"
      inputMaxLength={15}
    />
  )
}

export default CheckoutDeliveryNameInput
