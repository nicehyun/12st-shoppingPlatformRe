import DeliveryInputLayout from "./DeliveryInputLayout"
import DeliveryInfoInput from "./DeliveryInfoInput"
import { useDeliveryInfoInputContollers } from "../../hooks/useDeliveryInfoInputContollers"

interface IPhoneInput {
  isRequired?: boolean
}

const PhoneInput = ({ isRequired = false }: IPhoneInput) => {
  const { phone1Input, phone2Input, isLoading } =
    useDeliveryInfoInputContollers()
  const phoneClassification = isRequired ? "phone1" : "phone2"
  const label = isRequired ? "연락처1" : "연락처2"
  const inputState = isRequired
    ? phone1Input
    : {
        value: phone2Input.value,
        handleValueChange: phone2Input.handleValueChange,
      }

  return (
    <DeliveryInputLayout
      label={label}
      id={phoneClassification}
      isRequired={isRequired}
    >
      <DeliveryInfoInput
        id={phoneClassification}
        inputMaxLength={11}
        inputState={inputState}
        placeholder="수령인 연락처를 입력해주세요."
        isLoading={isLoading}
      />
    </DeliveryInputLayout>
  )
}

export default PhoneInput
