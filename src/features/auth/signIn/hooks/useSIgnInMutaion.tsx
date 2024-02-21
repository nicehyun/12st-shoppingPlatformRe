import { useMutation } from "@tanstack/react-query"
import { signIn } from "next-auth/react"
import { ROUTE, useNavigations } from "@/features/common/hooks/useNavigations"
import { useFeedbackModalWithError } from "@/features/common/hooks/useFeedbackModalWithError"

export const useSignInMutaion = () => {
  const { routeTo } = useNavigations()

  const { showFeedbackModalWithErrorMessage } = useFeedbackModalWithError()

  const { isLoading, mutateAsync } = useMutation(
    (params: { email: string; password: string }) =>
      signIn("user-credentials", {
        email: params.email,
        password: params.password,
        redirect: false,
      }),
    {
      onSuccess(data) {
        if (data?.status === 401) {
          showFeedbackModalWithErrorMessage(data.error ?? "")
          return
        }

        if (data?.status === 200) {
          routeTo(ROUTE.HOME)
        }
      },
    }
  )

  return {
    mutateAsync,
    isLoading,
  }
}
