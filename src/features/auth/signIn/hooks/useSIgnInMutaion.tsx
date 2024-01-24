import { showFeedbackModal } from "@/redux/features/modalSlice"
import { useAppDispatch } from "@/redux/hooks"
import { useMutation } from "@tanstack/react-query"
import { signIn } from "next-auth/react"
import {
  emailValidator,
  passwordValidator,
} from "../../signUp/utils/validation"
import { ROUTE, useNavigations } from "@/features/common/hooks/useNavigations"

export const useSignInMutaion = () => {
  const dispatch = useAppDispatch()
  const { routeTo } = useNavigations()

  const { data, isLoading, mutateAsync } = useMutation(
    (params: { email: string; password: string }) =>
      signIn("user-credentials", {
        email: params.email,
        password: params.password,
        redirect: false,
      })
  )

  const signInMutateAsync = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)

    const email = formData.get("email") as string
    const password = formData.get("password") as string

    const isEmailValid = emailValidator(email)
    const isPasswordValid = passwordValidator(password)

    if (!isEmailValid) {
      dispatch(
        showFeedbackModal({
          modalContent: "유효한 이메일 형식이 아닙니다.",
        })
      )

      return
    }

    if (!isPasswordValid) {
      dispatch(
        showFeedbackModal({
          modalContent:
            "비밀번호는 영문, 숫자, 공백을 제외한 특수문자를 포함한 8~20자리를 입력해주세요.",
        })
      )

      return
    }

    const signInResponse = await mutateAsync({ email, password })

    if (signInResponse?.status === 401) {
      dispatch(
        showFeedbackModal({
          modalContent: signInResponse.error
            ? signInResponse.error
            : "로그인에 실패했습니다. 오류가 계속되면 고객센터에 문의해주세요.",
        })
      )
    }

    if (signInResponse?.status === 200) {
      routeTo(ROUTE.HOME)
    }
  }

  return {
    signInMutateAsync,
    isLoading,
  }
}
