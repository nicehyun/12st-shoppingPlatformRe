import { UserInfo } from "@/common/types/user"
import { useMutation } from "@tanstack/react-query"
import { signUpAPI } from "../models/signUpApi"
import { useFeedbackModal } from "./useFeedbackModal"

const useSignUpMutation = () => {
  const { showFeedbackModalWithContent } = useFeedbackModal()
  const signUpMutation = useMutation(
    (userInfo: UserInfo) => signUpAPI.signUp(userInfo),
    {
      onError: () =>
        showFeedbackModalWithContent(
          "회원가입에 실패했습니다. 오류가 계속되면 고객센터에 문의해주세요."
        ),
    }
  )

  return signUpMutation
}

export default useSignUpMutation
