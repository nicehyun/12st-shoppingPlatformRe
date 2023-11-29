import { useFeedbackModal } from "@/features/common/hooks/useFeedbackModal"
import { useMutation } from "@tanstack/react-query"
import { verifyPhoneAPI } from "../models/verifyPhoneAPI"

export const useRequestVerificationMutation = () => {
  const { showFeedbackModalWithContent } = useFeedbackModal()
  const {
    isLoading: isRequestVerificationLoading,
    mutateAsync: requestVerificationMutateAsync,
  } = useMutation<
    void,
    unknown,
    { phoneInputValue: string; isRequestCode?: boolean }
  >(
    async ({ phoneInputValue, isRequestCode }) => {
      await verifyPhoneAPI.requestPhoneVerification(
        phoneInputValue,
        isRequestCode
      )
    },
    {
      onError: () => {
        showFeedbackModalWithContent(
          "인증 번호 요청에 실패했습니다. 오류가 계속되면 고객센터에 문의해주세요."
        )
      },
    }
  )

  return {
    isRequestVerificationLoading,
    requestVerificationMutateAsync,
  }
}
