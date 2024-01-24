import { showFeedbackModal } from "@/redux/features/modalSlice"
import { useAppDispatch } from "@/redux/hooks"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { cartAPI } from "../models/cartAPI"
import { ProductInCart, ProductsInCart } from "../types/cart"
import { useConditionalSignInRoute } from "@/features/common/hooks/useConditionalSignInRoute"
import { useSessionQuery } from "@/features/auth/signIn/hooks/useSessionQuery"

export const useIncreaseAmountMutation = (productInCartInfo: ProductInCart) => {
  const { session } = useSessionQuery()
  const queryClient = useQueryClient()
  const dispatch = useAppDispatch()
  const { shouldProceedWithRouting } = useConditionalSignInRoute()

  const INCREASE_LIMIT = 30

  const { mutate, isLoading } = useMutation(
    () =>
      cartAPI.increaseProductToCart(
        productInCartInfo,
        session?.user.accessToken
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

    const previousProductListInCart: ProductsInCart | undefined =
      queryClient.getQueryData(["productListInCart"]) ?? []

    const filtedProduct = previousProductListInCart.find(
      (product) => product.id === productInCartInfo.id
    )

    const productInCartAmount = filtedProduct?.amount ?? 0

    if (INCREASE_LIMIT <= productInCartAmount) {
      dispatch(
        showFeedbackModal({
          modalContent: "장바구니에 담을 수 있는 최대 수량은 50개입니다.",
        })
      )

      return
    }

    if (shouldProceedWithRouting(!!session)) {
      mutate()
    }
  }

  return { increaseMutate, isLoading }
}
