import { DeliveryInfo } from "@/features/common/types/deliveryInfo"
import { useGetDeliveryInfoQuery } from "@/features/common/hooks/useGetDeliveryInfoQuery"
import { useUpdateDeliveryInfoMutation } from "@/features/common/hooks/useUpdateDeliveryInfoMutation"
import { useFeedbackModal } from "@/features/common/hooks/useFeedbackModal"

export const useDeliveryInfoModificaitionMutation = () => {
  const { deliveryInfo } = useGetDeliveryInfoQuery()
  const { isLoading, updateDeliveryInfoMutateAsync } =
    useUpdateDeliveryInfoMutation(true)
  const { showFeedbackModalWithContent } = useFeedbackModal()

  const updupdateDeliveryInfoMutateAsync = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault()

    if (!deliveryInfo || isLoading) return

    const formData = new FormData(event.currentTarget)
    const inputsToBeUpdated: DeliveryInfo = {
      deliveryName: formData.get("deliveryName")
        ? (formData.get("deliveryName") as string)
        : null,
      recipient: formData.get("recipient") as string,
      zipcode: formData.get("zipcode") as string,
      address: formData.get("address") as string,
      additionalAddress: formData.get("additionalAddress") as string,
      phone1: formData.get("phone1") as string,
      phone2: formData.get("phone2")
        ? (formData.get("phone2") as string)
        : null,
    }

    if (
      Object.keys(deliveryInfo).every(
        (key) => deliveryInfo[key] === inputsToBeUpdated[key]
      )
    ) {
      showFeedbackModalWithContent(
        "기존 배송지 정보와 동일합니다. 변경사항이 없습니다."
      )

      return
    }

    await updateDeliveryInfoMutateAsync(inputsToBeUpdated)
  }

  return { isLoading, updupdateDeliveryInfoMutateAsync }
}
