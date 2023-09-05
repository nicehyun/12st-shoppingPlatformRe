import Input from "@/common/views/Input"
import CheckoutInputLayout from "./CheckoutInputLayout"

const CheckoutAddressInput = () => {
  return (
    <CheckoutInputLayout label="배송지" id="recipient" isRequired>
      <Input
        id="recipient"
        name="recipient"
        type="text"
        classNames="w-full max-w-[500px] h-[50px] focus:border-black focus:border-[2px]"
      />
    </CheckoutInputLayout>
  )
}

export default CheckoutAddressInput
