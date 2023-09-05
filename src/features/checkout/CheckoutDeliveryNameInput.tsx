import Input from "@/common/views/Input"
import CheckoutInputLayout from "./CheckoutInputLayout"

const CheckoutDeliveryNameInput = () => {
  return (
    <CheckoutInputLayout label="배송지명" id="deliveryName">
      <Input
        id="deliveryName"
        name="deliveryName"
        type="text"
        classNames="w-full max-w-[500px] h-[50px]"
      />
    </CheckoutInputLayout>
  )
}

export default CheckoutDeliveryNameInput
