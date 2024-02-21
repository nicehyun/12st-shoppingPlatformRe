import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useFeedbackModal } from "@/features/common/hooks/useFeedbackModal"
import { useFeedbackModalWithError } from "@/features/common/hooks/useFeedbackModalWithError"
import { verifyPhoneAPI } from "../models/verifyPhoneAPI"

export const useSendVerificationCodeMutation = (
  phoneNumber: string,
  verificationCode: string
) => {
  const queryClient = useQueryClient()
  const { showFeedbackModalWithContent } = useFeedbackModal()
  const { showFeedbackModalWithErrorMessage } = useFeedbackModalWithError()
  const { isLoading, mutateAsync } = useMutation(
    () => verifyPhoneAPI.sendVerificationCode(phoneNumber, verificationCode),
    {
      onSuccess(data) {
        if (data.status === 401) {
          showFeedbackModalWithErrorMessage(data.error ?? "")
          return
        }

        if (data.status === 200) {
          showFeedbackModalWithContent("본인인증이 완료되었습니다.")
          queryClient.setQueryData(
            ["SignUpValidation", "phoneVerificationCheck"],
            true
          )
        }
      },
      onError: () => {
        showFeedbackModalWithContent(
          "인증 번호 전송에 실패했습니다. 오류가 계속되면 고객센터에 문의해주세요."
        )
      },
    }
  )

  const resetPhoneVerificationCheck = () => {
    queryClient.setQueryData(
      ["SignUpValidation", "phoneVerificationCheck"],
      false
    )
  }

  return { isLoading, mutateAsync, resetPhoneVerificationCheck }
}
