import { useSessionQuery } from "@/features/auth/signIn/hooks/useSessionQuery"
import { useConditionalSignInRoute } from "@/features/common/hooks/useConditionalSignInRoute"
import { useFeedbackModal } from "@/features/common/hooks/useFeedbackModal"
import { useFeedbackModalWithError } from "@/features/common/hooks/useFeedbackModalWithError"
import { productHeartAPI } from "@/features/common/models/heartAPI"
import { Product } from "@/features/common/types/product"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export const useRemoveHeartListMutation = (productInfo: Product) => {
  const queryClient = useQueryClient()
  const { shouldProceedWithRouting } = useConditionalSignInRoute()
  const { session } = useSessionQuery()
  const { showFeedbackModalWithContent } = useFeedbackModal()
  const { showFeedbackModalWithErrorMessage } = useFeedbackModalWithError()

  const { mutateAsync, isLoading: isRemoveHeartListLoading } = useMutation(
    () =>
      productHeartAPI.removeProductInHeart(
        session?.user.accessToken,
        productInfo
      ),
    {
      onSuccess: (data) => {
        if (data.status === 401) {
          showFeedbackModalWithErrorMessage(data.error ?? "")
          return
        }

        if (data.status === 200) {
          queryClient.invalidateQueries(["heartList"])

          showFeedbackModalWithContent("상품이 HEART에서 제거되었습니다.")
          return
        }
      },
      onError: () => {
        showFeedbackModalWithContent(
          "다시 한번 시도해주세요. 오류가 계속되면 고객센터에 문의해주세요."
        )
      },
    }
  )

  const removeHeartListMutateAsync = async () => {
    if (isRemoveHeartListLoading) return

    if (shouldProceedWithRouting(!!session)) {
      mutateAsync()
    }
  }

  return { removeHeartListMutateAsync, isRemoveHeartListLoading }
}
