import { useMutation, useQueryClient } from "@tanstack/react-query"
import { myPageAPI } from "../models/myPageAPI"
import { useSessionQuery } from "@/features/auth/signIn/hooks/useSessionQuery"
import { useFeedbackModal } from "@/features/common/hooks/useFeedbackModal"
import { useFeedbackModalWithError } from "@/features/common/hooks/useFeedbackModalWithError"
import { useGetUserInfoQuery } from "./useGetUserInfoQuery"

export const useCheckMarketingClauseMutation = () => {
  const { session } = useSessionQuery()
  const queryClient = useQueryClient()

  const { userInfo } = useGetUserInfoQuery()
  const { showFeedbackModalWithContent } = useFeedbackModal()
  const { showFeedbackModalWithErrorMessage } = useFeedbackModalWithError()

  const { isLoading, mutateAsync } = useMutation(
    (isChecked: boolean) =>
      myPageAPI.modificatieMarketingClause(
        session?.user.accessToken,
        isChecked
      ),
    {
      onSuccess: (data) => {
        if (data.status === 401) {
          showFeedbackModalWithErrorMessage(data.error ?? "")
          return
        }

        if (data.status === 200) {
          showFeedbackModalWithContent("마케팅 약관 동의가 수정되었습니다.")
          queryClient.invalidateQueries(["userInfo"])
          return
        }
      },
      onError: () => {
        showFeedbackModalWithContent(
          "마케팅 약관 동의 수정에 실패했습니다. 오류가 계속되면 고객센터에 문의해주세요."
        )
      },
    }
  )

  const updateMaketingClauseMutateAsync = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault()

    if (isLoading || !userInfo) return
    const formData = new FormData(event.currentTarget)

    const marketingClause = formData.get("marketing") as "on" | null

    const isCheckedMarketingClause = marketingClause === "on"

    if (userInfo?.marketingClause === isCheckedMarketingClause) {
      showFeedbackModalWithContent(
        "기존 마케팅 약관 동의와 동일합니다. 변경사항이 없습니다."
      )
      return
    }

    mutateAsync(isCheckedMarketingClause)
  }

  return {
    isLoading,
    updateMaketingClauseMutateAsync,
  }
}
