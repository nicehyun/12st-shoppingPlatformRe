import { useMutation, useQueryClient } from "@tanstack/react-query"
import { cartAPI } from "../models/cartAPI"
import { Product } from "@/features/common/types/product"
import { useConditionalSignInRoute } from "@/features/common/hooks/useConditionalSignInRoute"
import { useSessionQuery } from "@/features/auth/signIn/hooks/useSessionQuery"
import { useFeedbackModal } from "@/features/common/hooks/useFeedbackModal"
import { useFeedbackModalWithError } from "@/features/common/hooks/useFeedbackModalWithError"
import { useAppDispatch } from "@/redux/hooks"
import { emptyCheckedProductList } from "@/redux/features/cartSlice"

export const useRemoveFromCartMutation = (productInfo: Product | null) => {
  const dispatch = useAppDispatch()
  const queryClient = useQueryClient()
  const { session } = useSessionQuery()
  const { shouldProceedWithRouting } = useConditionalSignInRoute()
  const { showFeedbackModalWithContent } = useFeedbackModal()
  const { showFeedbackModalWithErrorMessage } = useFeedbackModalWithError()

  const { mutateAsync, isLoading } = useMutation(
    () => cartAPI.removeProductInCart(productInfo, session?.user.accessToken),
    {
      onSuccess: (data) => {
        if (data.status === 200) {
          queryClient.invalidateQueries(["productListInCart"])
          showFeedbackModalWithContent("장바구니에서 상품을 제거하였습니다.")
          dispatch(emptyCheckedProductList())
          return
        }

        if (data.status === 401) {
          showFeedbackModalWithErrorMessage(data.error ?? "")
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

  const removeMutateAsync = async () => {
    if (isLoading) return

    if (shouldProceedWithRouting(!!session)) {
      await mutateAsync()
    }
  }

  return { removeMutateAsync, isLoading }
}
