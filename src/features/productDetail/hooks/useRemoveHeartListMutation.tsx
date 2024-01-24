import { useSessionQuery } from "@/features/auth/signIn/hooks/useSessionQuery"
import { useConditionalSignInRoute } from "@/features/common/hooks/useConditionalSignInRoute"
import { productHeartAPI } from "@/features/common/models/heartAPI"
import { Product } from "@/features/common/types/product"
import { showFeedbackModal } from "@/redux/features/modalSlice"
import { useAppDispatch } from "@/redux/hooks"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export const useRemoveHeartListMutation = (productInfo: Product) => {
  const queryClient = useQueryClient()
  const dispatch = useAppDispatch()
  const { shouldProceedWithRouting } = useConditionalSignInRoute()
  const { session } = useSessionQuery()

  const { mutateAsync, isLoading: isRemoveHeartListLoading } = useMutation(
    () =>
      productHeartAPI.heartOfProduct(
        productInfo,
        "remove",
        session?.user.accessToken
      ),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["heartList"])

        dispatch(
          showFeedbackModal({
            modalContent: "상품이 HEART에서 제거되었습니다.",
          })
        )
      },
      onError: () => {
        dispatch(
          showFeedbackModal({
            modalContent:
              "다시 한번 시도해주세요. 오류가 계속되면 고객센터에 문의해주세요.",
          })
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
