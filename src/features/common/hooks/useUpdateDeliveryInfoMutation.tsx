import { useSessionQuery } from "@/features/auth/signIn/hooks/useSessionQuery"
import { useFeedbackModal } from "./useFeedbackModal"
import { useFeedbackModalWithError } from "./useFeedbackModalWithError"
import { useMutation } from "@tanstack/react-query"
import { deliveryInfoAPI } from "../models/deliveryInfoAPI"
import { DeliveryInfo } from "../types/deliveryInfo"

export const useUpdateDeliveryInfoMutation = (
  isShowSuccessFeedbackModal: boolean
) => {
  const { session } = useSessionQuery()
  const { showFeedbackModalWithContent } = useFeedbackModal()
  const { showFeedbackModalWithErrorMessage } = useFeedbackModalWithError()

  const { isLoading, mutateAsync } = useMutation(
    (deliveryInfo: DeliveryInfo) =>
      deliveryInfoAPI.updateDeliveryInfo(
        session?.user.accessToken,
        deliveryInfo
      ),
    {
      onSuccess: (data) => {
        if (data.status === 401) {
          showFeedbackModalWithErrorMessage(data.error ?? "")
          return
        }

        if (data.status === 200 && isShowSuccessFeedbackModal) {
          showFeedbackModalWithContent("배송지 정보가 수정되었습니다.")

          return
        }
      },
      onError: () => {
        showFeedbackModalWithContent(
          "배송지 정보 수정에 실패했습니다. 오류가 계속되면 고객센터에 문의해주세요."
        )
      },
    }
  )

  const updateDeliveryInfoMutateAsync = async (deliveryInfo: DeliveryInfo) => {
    if (isLoading) return

    mutateAsync(deliveryInfo)
  }

  return {
    isLoading,
    updateDeliveryInfoMutateAsync,
  }
}
