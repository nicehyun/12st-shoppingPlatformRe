"use client"

import DeliveryInfoInputs from "@/features/checkout/views/delivery/DeliveryInfoInputs"
import UpdateButton from "./UpdateButton"
import { useUpdateDeliveryInfoMutation } from "@/features/common/hooks/useUpdateDeliveryInfoMutation"
import { FormEvent } from "react"
import { useGetDeliveryInfoQuery } from "@/features/common/hooks/useGetDeliveryInfoQuery"

import { useFeedbackModal } from "@/features/common/hooks/useFeedbackModal"
import { validCheckComparisonOfChangeDeliveryInfo } from "../../models/validCheck"
import { validCheckDeliveryInfo } from "@/features/checkout/models/validCheck"

const DeliverInfoModification = () => {
  const { deliveryInfo } = useGetDeliveryInfoQuery()
  const { isLoading, mutateAsync } = useUpdateDeliveryInfoMutation(true)

  const { showFeedbackModalWithContent } = useFeedbackModal()

  const handelDeliveryInfoUpdate = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault()

    if (isLoading) return

    const formData = new FormData(event.currentTarget)

    formData.append("prevDeliveryInfo", JSON.stringify(deliveryInfo))

    const { valid: changeValid, message: changeMessage } =
      validCheckComparisonOfChangeDeliveryInfo(formData)

    if (!changeValid && changeMessage !== undefined) {
      showFeedbackModalWithContent(changeMessage)

      return
    }

    const { isValid: deliveryInfoValid, message: deliveryInfoMessage } =
      validCheckDeliveryInfo(formData)

    if (!deliveryInfoValid && deliveryInfoMessage !== undefined) {
      showFeedbackModalWithContent(deliveryInfoMessage)

      return
    }

    await mutateAsync(formData)
  }

  return (
    <form onSubmit={handelDeliveryInfoUpdate} className="py-[30px]">
      <DeliveryInfoInputs />

      <UpdateButton type="submit" isLoading={isLoading} />
    </form>
  )
}

export default DeliverInfoModification
