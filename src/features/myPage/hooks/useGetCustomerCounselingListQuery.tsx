import { useQuery } from "@tanstack/react-query"
import { myPageAPI } from "../models/myPageAPI"
import { useSessionQuery } from "@/features/auth/signIn/hooks/useSessionQuery"
import { isFeedbackError } from "@/features/common/utils/error"
import { useFeedbackModal } from "@/features/common/hooks/useFeedbackModal"
import { useFeedbackModalWithError } from "@/features/common/hooks/useFeedbackModalWithError"

export const useGetCustomerCounselingListQuery = () => {
  const { session } = useSessionQuery()
  const { showFeedbackModalWithContent } = useFeedbackModal()
  const { showFeedbackModalWithErrorMessage } = useFeedbackModalWithError()

  const { data, isLoading, isError } = useQuery(
    ["customerCounselingList"],
    () => myPageAPI.getCoutomerCounselingList(session?.user.accessToken),
    {
      staleTime: 60 * 60 * 1000,
      enabled: !!session,
      onSuccess(data) {
        if (isFeedbackError(data)) {
          showFeedbackModalWithErrorMessage(data.error ?? "")
          return
        }
      },
      onError: () => {
        showFeedbackModalWithContent(
          "1:1 문의 내역을 가져오지 못 했습니다. 오류가 계속되면 고객센터에 문의해주세요."
        )
      },
    }
  )

  const customerCounselingList = !isFeedbackError(data) && data ? data : []

  return {
    customerCounselingList: customerCounselingList,
    isLoading,
    isError,
  }
}
