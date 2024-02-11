import DeliveryInputLayout from "./DeliveryInputLayout"
import { useDeliveryInfoInputContollers } from "../../hooks/useDeliveryInfoInputContollers"
import DeliveryInfoInput from "./DeliveryInfoInput"

const RecipientInput = () => {
  const { recipient, isLoading } = useDeliveryInfoInputContollers()

  return (
    <DeliveryInputLayout label="수령인" id="recipient" isRequired>
      <DeliveryInfoInput
        id="recipient"
        inputMaxLength={10}
        inputState={recipient}
        placeholder="수령인을 입력해주세요. (2~4자)"
        isLoading={isLoading}
      />
    </DeliveryInputLayout>
  )
}

export default RecipientInput
