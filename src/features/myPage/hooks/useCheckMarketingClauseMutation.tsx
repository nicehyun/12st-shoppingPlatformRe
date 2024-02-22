import { useMutation, useQueryClient } from "@tanstack/react-query"
import { myPageAPI } from "../models/myPageAPI"
import { useSessionQuery } from "@/features/auth/signIn/hooks/useSessionQuery"
import { useFeedbackModal } from "@/features/common/hooks/useFeedbackModal"
import { useFeedbackModalWithError } from "@/features/common/hooks/useFeedbackModalWithError"

export const useCheckMarketingClauseMutation = () => {
  const { session } = useSessionQuery()
  const queryClient = useQueryClient()
  const { showFeedbackModalWithContent } = useFeedbackModal()
  const { showFeedbackModalWithErrorMessage } = useFeedbackModalWithError()

  const { isLoading, mutateAsync } = useMutation(
    (formData: FormData) =>
      myPageAPI.modificatieMarketingClause(session?.user.accessToken, formData),
    {
      onSuccess: (data) => {
        if (data.status === 401) {
          showFeedbackModalWithErrorMessage(data.error ?? "")
          return
        }

        if (data.status === 200) {
          showFeedbackModalWithContent("마케팅 약관 동의가 수정되었습니다.")
          queryClient.invalidateQueries(["userInfo"])
          return
        }
      },
      onError: () => {
        showFeedbackModalWithContent(
          "마케팅 약관 동의 수정에 실패했습니다. 오류가 계속되면 고객센터에 문의해주세요."
        )
      },
    }
  )

  return {
    isLoading,
    mutateAsync,
  }
}
