import { CheckoutList } from "@/features/checkout/types/checkout"

import { useQuery, useQueryClient } from "@tanstack/react-query"
import { checkoutAPI } from "../models/checkoutAPI"
import { useSessionQuery } from "@/features/auth/signIn/hooks/useSessionQuery"
import { isFeedbackError } from "@/features/common/utils/error"
import { useFeedbackModalWithError } from "@/features/common/hooks/useFeedbackModalWithError"
import { useFeedbackModal } from "@/features/common/hooks/useFeedbackModal"

export const useGetCheckoutListQuery = () => {
  const queryClient = useQueryClient()
  const { session } = useSessionQuery()
  const { showFeedbackModalWithContent } = useFeedbackModal()
  const { showFeedbackModalWithErrorMessage } = useFeedbackModalWithError()

  const { data, isLoading } = useQuery(
    ["checkoutList"],
    () => checkoutAPI.getCheckoutList(session?.user.accessToken),
    {
      onSuccess: (data) => {
        if (isFeedbackError(data)) {
          showFeedbackModalWithErrorMessage(data.error ?? "")
          queryClient.setQueryData(["checkoutList"], [])
          return
        }
      },
      onError: () => {
        showFeedbackModalWithContent(
          "결제내역을 가져오지 못 했습니다. 오류가 계속되면 고객센터에 문의해주세요."
        )
        queryClient.setQueryData(["checkoutList"], [])
      },
      staleTime: 60 * 60 * 1000,
      enabled: !!session,
    }
  )

  const checkoutList = (
    !isFeedbackError(data) && data ? data : []
  ) as CheckoutList[]

  const currentCheckoutList = checkoutList[0]

  return { checkoutList, currentCheckoutList, isLoading }
}
