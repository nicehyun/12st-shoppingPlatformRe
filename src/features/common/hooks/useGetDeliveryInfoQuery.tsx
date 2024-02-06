import { useSessionQuery } from "@/features/auth/signIn/hooks/useSessionQuery"
import { deliveryInfoAPI } from "@/features/common/models/deliveryInfoAPI"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { useFeedbackModal } from "./useFeedbackModal"
import { isFeedbackError } from "../utils/error"

export const useGetDeliveryInfoQuery = (
  isShowSuccessFeedbackModal: boolean
) => {
  const queryClient = useQueryClient()
  const { session } = useSessionQuery()
  const { showFeedbackModalWithContent } = useFeedbackModal()

  const { data, isLoading, isFetching } = useQuery(
    ["deliveryInfo"],
    () => deliveryInfoAPI.getDeliveryInfo(session?.user.accessToken),
    {
      onSuccess: (data) => {
        if (data?.status === 401) {
          queryClient.setQueryData(["deliveryInfo"], null)
        }

        if (isShowSuccessFeedbackModal) {
          showFeedbackModalWithContent("배송지 수정이 완료되었습니다.")
        }
      },
      onError: () => {
        queryClient.setQueryData(["deliveryInfo"], null)
      },
      enabled: !!session,
      staleTime: 1000 * 60 * 60,
    }
  )

  const deliveryInfo = !isFeedbackError(data) && data ? data : null

  return { deliveryInfo, isLoading, isFetching }
}
