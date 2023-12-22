import { useUserInput } from "@/features/common/hooks/useUserInput"
import AddressInfo from "@/features/common/views/AddressInfo"
import { additionalAddressValidator } from "../../auth/signUp/utils/validation"
import CheckoutInputLayout from "./CheckoutInputLayout"

interface ICheckoutAddressInput {
  defaultValue?: {
    zipcode?: string
    address?: string
    additionalAddress?: string
  }
}

const CheckoutAddressInput = ({ defaultValue }: ICheckoutAddressInput) => {
  const additionalInput = useUserInput(
    additionalAddressValidator,
    defaultValue?.additionalAddress
  )

  return (
    <CheckoutInputLayout
      label="배송지"
      id="address"
      isRequired
      errorFeedbackMsg="배송지 상세 주소를 입력해주세요 (특수문자 사용 불가)"
      inputState={{ hasError: additionalInput.hasError }}
    >
      <AddressInfo
        zipcode={defaultValue?.zipcode}
        address={defaultValue?.address}
        additionalAddress={additionalInput}
        className="max-w-[500px]"
      />
    </CheckoutInputLayout>
  )
}

export default CheckoutAddressInput
