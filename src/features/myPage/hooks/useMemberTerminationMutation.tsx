import { useMutation } from "@tanstack/react-query"
import { myPageAPI } from "../models/myPageAPI"
import { useSessionQuery } from "@/features/auth/signIn/hooks/useSessionQuery"
import { useFeedbackModal } from "@/features/common/hooks/useFeedbackModal"
import { useFeedbackModalWithError } from "@/features/common/hooks/useFeedbackModalWithError"
import { signOut } from "next-auth/react"

export const useMemberTerminationMutation = () => {
  const { session } = useSessionQuery()
  const { showFeedbackModalWithContent } = useFeedbackModal()
  const { showFeedbackModalWithErrorMessage } = useFeedbackModalWithError()

  const { isLoading, mutateAsync } = useMutation(
    () => myPageAPI.memberTermination(session?.user.accessToken),
    {
      onSuccess: (data) => {
        if (data.status === 401) {
          showFeedbackModalWithErrorMessage(data.error ?? "")
          return
        }

        if (data.status === 200) {
          showFeedbackModalWithContent("회원 탈퇴되었습니다.")
          signOut()

          return
        }
      },
      onError: () => {
        showFeedbackModalWithContent(
          "회원 탈퇴에 실패했습니다. 오류가 계속되면 고객센터에 문의해주세요."
        )
      },
    }
  )

  const memberTerminationMutateAsync = async () => {
    if (isLoading) return

    mutateAsync()
  }

  return {
    memberTerminationMutateAsync,
    isLoading,
  }
}
