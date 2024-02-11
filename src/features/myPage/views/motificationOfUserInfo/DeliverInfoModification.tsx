"use client"

import { useDeliveryInfoModificaitionMutation } from "../../hooks/useDeliveryInfoModificaitionMutation"
import DeliveryInfoInputs from "@/features/checkout/views/delivery/DeliveryInfoInputs"
import UpdateButton from "./UpdateButton"

const DeliverInfoModification = () => {
  const { updupdateDeliveryInfoMutateAsync, isLoading } =
    useDeliveryInfoModificaitionMutation()

  return (
    <form onSubmit={updupdateDeliveryInfoMutateAsync} className="py-[30px]">
      <DeliveryInfoInputs />

      <UpdateButton type="submit" isLoading={isLoading} />
    </form>
  )
}

export default DeliverInfoModification
