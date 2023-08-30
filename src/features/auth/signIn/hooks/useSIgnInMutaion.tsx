import { showFeedbackModal } from "@/redux/features/modalSlice"
import { useAppDispatch } from "@/redux/hooks"
import { useMutation } from "@tanstack/react-query"
import { signIn } from "next-auth/react"

const useSignInMutaion = () => {
  const dispatch = useAppDispatch()

  const signInMutaion = useMutation(
    (params: { email: string; password: string }) =>
      signIn("user-credentials", {
        email: params.email,
        password: params.password,
        redirect: false,
      }),
    {
      onError: () =>
        dispatch(
          showFeedbackModal({
            modalContent:
              "로그인에 실패했습니다. 오류가 계속되면 고객센터에 문의해주세요.",
          })
        ),
    }
  )
  return signInMutaion
}

export default useSignInMutaion
