import { showFeedbackModal } from "@/redux/features/modalSlice"
import { useAppDispatch } from "@/redux/hooks"

import { useMutation, useQueryClient } from "@tanstack/react-query"
import { cartAPI } from "../models/cartAPI"
import { ProductInCart } from "../types/cart"
import { useConditionalSignInRoute } from "@/features/common/hooks/useConditionalSignInRoute"
import { useSessionQuery } from "@/features/auth/signIn/hooks/useSessionQuery"

export const useDecreaseAmountMutation = (productInCartInfo: ProductInCart) => {
  const { session } = useSessionQuery()
  const queryClient = useQueryClient()
  const dispatch = useAppDispatch()
  const { shouldProceedWithRouting } = useConditionalSignInRoute()

  const { mutate, isLoading } = useMutation(
    () =>
      cartAPI.decreaseProductToCart(
        productInCartInfo,
        session?.user.accessToken
      ),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["productListInCart"])
      },
      onError: () =>
        dispatch(
          showFeedbackModal({
            modalContent:
              "다시 한번 시도해주세요. 오류가 계속되면 고객센터에 문의해주세요.",
          })
        ),
    }
  )

  const decreaseMutate = async () => {
    if (isLoading) return

    if (shouldProceedWithRouting(!!session)) {
      mutate()
    }
  }

  return { decreaseMutate, isLoading }
}
