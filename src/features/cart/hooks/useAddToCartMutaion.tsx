import { Product } from "@/features/common/types/product"
import { showFeedbackModal, showRouteModal } from "@/redux/features/modalSlice"
import { useAppDispatch } from "@/redux/hooks"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { cartAPI } from "../models/cartAPI"
import { ROUTE } from "@/features/common/hooks/useNavigations"
import { useConditionalSignInRoute } from "@/features/common/hooks/useConditionalSignInRoute"
import { useSessionQuery } from "@/features/auth/signIn/hooks/useSessionQuery"
import { ProductsInCart } from "../types/cart"

export const useAddToCartMutaion = (productInfo: Product) => {
  const queryClient = useQueryClient()
  const dispatch = useAppDispatch()

  const { session } = useSessionQuery()
  const { shouldProceedWithRouting } = useConditionalSignInRoute()
  const CART_LIMIT = 10

  const { mutate, isLoading } = useMutation(
    () => cartAPI.addProductToCart(productInfo, session?.user.accessToken),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["productListInCart"])

        dispatch(
          showRouteModal({
            modalId: "signIn-route-modal",
            modalTitle: "",
            modalContent:
              "장바구니에 상품을 담았습니다. 장바구니로 이동하시겠습니까?",
            route: ROUTE.CART,
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

  const addMutate = () => {
    if (isLoading) return

    const previousProductListInCart: ProductsInCart | undefined =
      queryClient.getQueryData(["productListInCart"]) ?? []

    if (CART_LIMIT <= previousProductListInCart?.length) {
      dispatch(
        showRouteModal({
          modalId: "signIn-route-modal",
          modalTitle: "",
          modalContent:
            "장바구니에 상품이 가득 찼습니다. 장바구니로 이동하시겠습니까?",
          route: ROUTE.CART,
        })
      )

      return
    }

    if (shouldProceedWithRouting(!!session)) {
      mutate()
    }
  }

  return { addMutate, isLoading }
}
