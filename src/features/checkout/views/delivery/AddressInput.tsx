"use client"

import AddressInputLayout from "@/features/checkout/views/delivery/AddressInputLayout"
import DeliveryInputLayout from "./DeliveryInputLayout"
import { useDeliveryInfoInputContollers } from "../../hooks/useDeliveryInfoInputContollers"

const AddressInput = () => {
  const { address, isLoading } = useDeliveryInfoInputContollers()

  return (
    <DeliveryInputLayout label="배송지" id="address" isRequired>
      <AddressInputLayout {...address} isLoading={isLoading} />
    </DeliveryInputLayout>
  )
}

export default AddressInput
