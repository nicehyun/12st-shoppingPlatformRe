"use client"

import DeliveryInputLayout from "./DeliveryInputLayout"
import DeliveryInfoInput from "./DeliveryInfoInput"
import { useDeliveryInfoInputContollers } from "../../hooks/useDeliveryInfoInputContollers"

const DeliveryNameInput = () => {
  const { deliveryName, isLoading } = useDeliveryInfoInputContollers()

  return (
    <DeliveryInputLayout label="배송지명" id="deliveryName">
      <DeliveryInfoInput
        id="deliveryName"
        inputMaxLength={15}
        inputState={deliveryName}
        placeholder="배송지명을 입력해주세요. (최대 15자)"
        isLoading={isLoading}
      />
    </DeliveryInputLayout>
  )
}

export default DeliveryNameInput
