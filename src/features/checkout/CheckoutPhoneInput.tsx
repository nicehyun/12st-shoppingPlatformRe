import Input from "@/common/views/Input"
import CheckoutInputLayout from "./CheckoutInputLayout"

interface ICheckoutPhoneInput {
  isRequired?: boolean
}

const CheckoutPhoneInput = ({ isRequired = false }: ICheckoutPhoneInput) => {
  const inputId = isRequired ? "phone1" : "phone2"
  const label = isRequired ? "연락처1" : "연락처2"
  return (
    <CheckoutInputLayout label={label} id={inputId} isRequired={isRequired}>
      <Input
        id={inputId}
        name={inputId}
        type="number"
        classNames="w-full max-w-[500px] h-[50px] focus:border-black focus:border-[2px]"
      />
    </CheckoutInputLayout>
  )
}

export default CheckoutPhoneInput
