import { useFeedbackModal } from "@/features/common/hooks/useFeedbackModal"
import { useMutation } from "@tanstack/react-query"
import { useFeedbackModalWithError } from "@/features/common/hooks/useFeedbackModalWithError"
import { verifyPhoneAPI } from "../models/verifyPhoneAPI"

export const useRequestVerificationMutation = (phoneValue: string) => {
  const { showFeedbackModalWithContent } = useFeedbackModal()
  const { showFeedbackModalWithErrorMessage } = useFeedbackModalWithError()
  const { isLoading, mutateAsync } = useMutation(
    () => verifyPhoneAPI.requestPhoneVerification(phoneValue, false),
    {
      onSuccess(data) {
        if (data.status === 401) {
          showFeedbackModalWithErrorMessage(data.error ?? "")
          return
        }

        if (data.status === 200) {
          showFeedbackModalWithContent("인증 번호가 발송되었습니다.")

          return
        }
      },
      onError: () => {
        showFeedbackModalWithContent(
          "인증 번호 요청에 실패했습니다. 오류가 계속되면 고객센터에 문의해주세요."
        )
      },
    }
  )

  const verificationCodeTimerEnd = () => {
    verifyPhoneAPI.removeVerificationId(phoneValue)
    showFeedbackModalWithContent("인증 시간이 만료되었습니다.")
  }

  return {
    isLoading,
    mutateAsync,
    verificationCodeTimerEnd,
  }
}
