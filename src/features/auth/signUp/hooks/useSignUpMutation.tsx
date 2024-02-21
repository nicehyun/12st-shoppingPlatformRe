import { useMutation } from "@tanstack/react-query"
import { signUpAPI } from "@/features/auth/signUp/models/signUpAPI"
import { useFeedbackModal } from "../../../common/hooks/useFeedbackModal"
import { useFeedbackModalWithError } from "@/features/common/hooks/useFeedbackModalWithError"
import { ROUTE, useNavigations } from "@/features/common/hooks/useNavigations"

export const useSignUpMutation = () => {
  const { routeTo } = useNavigations()
  const { showFeedbackModalWithContent } = useFeedbackModal()
  const { showFeedbackModalWithErrorMessage } = useFeedbackModalWithError()

  const { isLoading, mutateAsync } = useMutation(
    (formData: FormData) => signUpAPI.signUp(formData),
    {
      onSuccess(data) {
        if (data.status === 401) {
          showFeedbackModalWithErrorMessage(data.error ?? "")
          return
        }

        if (data.status === 200) {
          showFeedbackModalWithContent("회원가입이 완료되었습니다.")
          routeTo(ROUTE.HOME)
        }
      },
      onError: () => {
        showFeedbackModalWithContent(
          "회원가입에 실패했습니다. 오류가 계속되면 고객센터에 문의해주세요."
        )
      },
    }
  )

  return { mutateAsync, isLoading }
}
