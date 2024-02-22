import { useFeedbackModal } from "@/features/common/hooks/useFeedbackModal"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { myPageAPI } from "../models/myPageAPI"
import { useSessionQuery } from "@/features/auth/signIn/hooks/useSessionQuery"
import { useFeedbackModalWithError } from "@/features/common/hooks/useFeedbackModalWithError"
import { ROUTE, useNavigations } from "@/features/common/hooks/useNavigations"

export const useCustomerCounselingWriteSubmitMutation = () => {
  const queryClient = useQueryClient()
  const { session } = useSessionQuery()

  const { routeTo } = useNavigations()
  const { showFeedbackModalWithContent } = useFeedbackModal()
  const { showFeedbackModalWithErrorMessage } = useFeedbackModalWithError()

  const { isLoading, mutateAsync } = useMutation(
    (formData: FormData) =>
      myPageAPI.writeCoustomerCounseling(session?.user.accessToken, formData),
    {
      onSuccess(data) {
        if (data.status === 401) {
          showFeedbackModalWithErrorMessage(data.error ?? "")
          return
        }

        if (data.status === 200) {
          showFeedbackModalWithContent("1:1 문의 등록이 완료되었습니다")
          queryClient.invalidateQueries(["customerCounselingList"])
          routeTo(ROUTE.INQUIRYCUSTOMERCOUNSELING)
          return
        }
      },
      onError: () => {
        showFeedbackModalWithContent(
          "문의 등록을 실패했습니다. 오류가 계속되면 고객센터에 문의해주세요."
        )
      },
    }
  )

  return {
    isLoading,
    mutateAsync,
  }
}
