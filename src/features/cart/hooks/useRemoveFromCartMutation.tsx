import { showFeedbackModal } from "@/redux/features/modalSlice"
import { useAppDispatch } from "@/redux/hooks"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { cartAPI } from "../models/cartAPI"
import { Product } from "@/features/common/types/product"
import { useConditionalSignInRoute } from "@/features/common/hooks/useConditionalSignInRoute"
import { useSessionQuery } from "@/features/auth/signIn/hooks/useSessionQuery"

export const useRemoveFromCartMutation = (productInfo: Product) => {
  const queryClient = useQueryClient()
  const { session } = useSessionQuery()
  const dispatch = useAppDispatch()
  const { shouldProceedWithRouting } = useConditionalSignInRoute()

  const { mutateAsync, isLoading } = useMutation(
    () => cartAPI.removeProductFromCart(productInfo, session?.user.accessToken),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["productListInCart"])

        dispatch(
          showFeedbackModal({
            modalContent: "장바구니에서 상품을 제거하였습니다.",
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

  const removeMutateAsync = async () => {
    if (isLoading) return

    if (shouldProceedWithRouting(!!session)) {
      mutateAsync()
    }
  }

  return { removeMutateAsync, isLoading }
}
