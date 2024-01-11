import useSessionQuery from "@/features/auth/signIn/hooks/useSessionQuery"
import { showFeedbackModal } from "@/redux/features/modalSlice"
import { useAppDispatch } from "@/redux/hooks"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { cartAPI } from "../models/cartAPI"
import { ProductInCart } from "../types/cart"
import { useConditionalSignInRoute } from "@/features/common/hooks/useConditionalSignInRoute"

export const useIncreaseAmountMutation = (productInCartInfo: ProductInCart) => {
  const { sessionQuery } = useSessionQuery()
  const queryClient = useQueryClient()
  const dispatch = useAppDispatch()
  const { shouldProceedWithRouting } = useConditionalSignInRoute()

  const { mutate, isLoading } = useMutation(
    () =>
      cartAPI.increaseProductToCart(
        productInCartInfo,
        sessionQuery?.user.accessToken
      ),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["productListInCart"])
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

  const increaseMutate = () => {
    if (isLoading) return

    if (shouldProceedWithRouting(!!sessionQuery)) {
      mutate()
    }
  }

  return { increaseMutate, isLoading }
}
