import { useFeedbackModal } from "@/features/common/hooks/useFeedbackModal"
import { useMutation } from "@tanstack/react-query"
import { phoneValidator } from "../utils/validation"
import { useFeedbackModalWithError } from "@/features/common/hooks/useFeedbackModalWithError"
import { VerificationResponse, verifyPhoneAPI } from "../models/verifyPhoneAPI"

export const useRequestVerificationMutation = (
  phoneValue: string,
  isisVerificationChecked: boolean
) => {
  const { showFeedbackModalWithContent } = useFeedbackModal()
  const { showFeedbackModalWithErrorMessage } = useFeedbackModalWithError()
  const { isLoading, mutateAsync } = useMutation(
    () => verifyPhoneAPI.requestPhoneVerification(phoneValue, false),
    {
      onError: () => {
        showFeedbackModalWithContent(
          "인증 번호 요청에 실패했습니다. 오류가 계속되면 고객센터에 문의해주세요."
        )
      },
    }
  )

  const requestVerificationMutateAsync = async (
    requestVerificationCb: () => void
  ) => {
    if (isLoading || isisVerificationChecked) return

    if (!phoneValidator(phoneValue)) {
      showFeedbackModalWithContent("유효한 휴대폰 번호를 입력해주세요.")
      return
    }

    const requestVerificationResponse: VerificationResponse =
      await mutateAsync()

    if (requestVerificationResponse.status === 401) {
      showFeedbackModalWithErrorMessage(requestVerificationResponse.error ?? "")
      return
    }

    if (requestVerificationResponse.status === 200) {
      showFeedbackModalWithContent("인증 번호가 발송되었습니다.")
      requestVerificationCb()
    }
  }

  const verificationCodeTimerEnd = () => {
    verifyPhoneAPI.removeVerificationId(phoneValue)
    showFeedbackModalWithContent("인증 시간이 만료되었습니다.")
  }

  return {
    isLoading,
    requestVerificationMutateAsync,
    verificationCodeTimerEnd,
  }
}
