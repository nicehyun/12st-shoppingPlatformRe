import { useMutation } from "@tanstack/react-query"
import { useFeedbackModal } from "@/features/common/hooks/useFeedbackModal"
import { useFeedbackModalWithError } from "@/features/common/hooks/useFeedbackModalWithError"
import { verifyPhoneAPI } from "../models/verifyPhoneAPI"

type VerificationResponse = {
  status: number
  error?: string
}

export const useSendVerificationCodeMutation = (
  phoneNumber: string,
  verificationCode: string
) => {
  const { showFeedbackModalWithContent } = useFeedbackModal()
  const { showFeedbackModalWithErrorMessage } = useFeedbackModalWithError()
  const { isLoading, mutateAsync } = useMutation(
    () => verifyPhoneAPI.sendVerificationCode(phoneNumber, verificationCode),
    {
      onError: () => {
        showFeedbackModalWithContent(
          "인증 번호 전송에 실패했습니다. 오류가 계속되면 고객센터에 문의해주세요."
        )
      },
    }
  )

  const sendVerificationCodeMutateAsync = async (
    validSendVerificationCodeCb: () => void
  ) => {
    if (isLoading) return

    const sendVerificationCodeResponse: VerificationResponse =
      await mutateAsync()

    if (sendVerificationCodeResponse.status === 401) {
      showFeedbackModalWithErrorMessage(
        sendVerificationCodeResponse.error ?? ""
      )
      return
    }

    if (sendVerificationCodeResponse.status === 200) {
      showFeedbackModalWithContent("본인인증이 완료되었습니다.")
      validSendVerificationCodeCb()
    }
  }

  return { isLoading, sendVerificationCodeMutateAsync }
}
