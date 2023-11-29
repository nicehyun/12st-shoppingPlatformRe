import { useMutation } from "@tanstack/react-query"
import { signUpAPI } from "../models/signUpAPI"
import { useFeedbackModal } from "../../../common/hooks/useFeedbackModal"
import { IRequestSignUp } from "../types/signUp"

const useSignUpMutation = () => {
  const { showFeedbackModalWithContent } = useFeedbackModal()

  const signUpMutation = useMutation(
    (props: IRequestSignUp) => signUpAPI.signUp(props),
    {
      onError: () => {
        showFeedbackModalWithContent(
          "회원가입에 실패했습니다. 오류가 계속되면 고객센터에 문의해주세요."
        )
      },
    }
  )

  return signUpMutation
}

export default useSignUpMutation
