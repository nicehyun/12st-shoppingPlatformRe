import { useMutation } from "@tanstack/react-query"
import { signUpAPI } from "@/features/auth/signUp/models/signUpAPI"
import { useFeedbackModal } from "@/features/common/hooks/useFeedbackModal"
import { useFeedbackModalWithError } from "@/features/common/hooks/useFeedbackModalWithError"

export const useEmailDuplicationCheckMutation = (
  email: string,
  onSuccessCb: () => void
) => {
  const { showFeedbackModalWithContent } = useFeedbackModal()
  const { showFeedbackModalWithErrorMessage } = useFeedbackModalWithError()
  const { isLoading, mutateAsync } = useMutation(
    () => signUpAPI.emailDuplicateCheck(email),
    {
      onSuccess: (data) => {
        if (data.status === 401 || data.status === 409) {
          showFeedbackModalWithErrorMessage(data.error)
          return
        }

        if (data.status === 200) {
          showFeedbackModalWithContent("사용 가능한 이메일입니다.")

          onSuccessCb()
          return
        }
      },
      onError: () => {
        showFeedbackModalWithContent(
          "이메일 중복검사에 실패했습니다. 오류가 계속되면 고객센터에 문의해주세요."
        )
      },
    }
  )

  const emailDuplicationCheckMutateAsync = async () => {
    if (isLoading) return

    await mutateAsync()
  }

  return { emailDuplicationCheckMutateAsync, isLoading }
}
