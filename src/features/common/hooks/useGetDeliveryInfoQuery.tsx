import { useSessionQuery } from "@/features/auth/signIn/hooks/useSessionQuery"
import { deliveryInfoAPI } from "@/features/common/models/deliveryInfoAPI"
import { useQuery } from "@tanstack/react-query"
import { useFeedbackModal } from "./useFeedbackModal"
import { useFeedbackModalWithError } from "./useFeedbackModalWithError"
import { isFeedbackError } from "../utils/error"

export const useGetDeliveryInfoQuery = () => {
  const { session } = useSessionQuery()
  const { showFeedbackModalWithContent } = useFeedbackModal()
  const { showFeedbackModalWithErrorMessage } = useFeedbackModalWithError()

  const { data, isLoading, isFetching } = useQuery(
    ["deliveryInfo"],
    () => deliveryInfoAPI.getDeliveryInfo(session?.user.accessToken),
    {
      onSuccess: (data) => {
        if (data?.status === 401) {
          showFeedbackModalWithErrorMessage(data.error ?? "")

          return
        }
      },
      onError: () => {
        showFeedbackModalWithContent(
          "배송지 정보를 가져오지 못 했습니다. 오류가 계속되면 고객센터에 문의해주세요."
        )
      },
      enabled: !!session,
      staleTime: 1000 * 60 * 60,
    }
  )

  const deliveryInfo = !isFeedbackError(data) && data ? data : null

  return { deliveryInfo, isLoading, isFetching }
}
