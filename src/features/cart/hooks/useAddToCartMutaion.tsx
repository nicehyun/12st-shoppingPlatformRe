import { Product } from "@/features/common/types/product"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { cartAPI } from "../models/cartAPI"
import { useConditionalSignInRoute } from "@/features/common/hooks/useConditionalSignInRoute"
import { useSessionQuery } from "@/features/auth/signIn/hooks/useSessionQuery"
import { ProductsInCart } from "../types/cart"
import { useFeedbackModal } from "@/features/common/hooks/useFeedbackModal"
import { useFeedbackModalWithError } from "@/features/common/hooks/useFeedbackModalWithError"
import { useAppDispatch } from "@/redux/hooks"
import { showRouteModal } from "@/redux/features/modalSlice"
import { ROUTE } from "@/features/common/hooks/useNavigations"

export const useAddToCartMutaion = (productInfo: Product) => {
  const dispatch = useAppDispatch()
  const queryClient = useQueryClient()
  const { session } = useSessionQuery()
  const { showFeedbackModalWithContent } = useFeedbackModal()
  const { showFeedbackModalWithErrorMessage } = useFeedbackModalWithError()
  const { shouldProceedWithRouting } = useConditionalSignInRoute()
  const CART_LIMIT = 10

  const routeDispatch = (routeModalContent: string) =>
    dispatch(
      showRouteModal({
        modalId: "cart-route-modal",
        modalTitle: "",
        modalContent: `${routeModalContent} 장바구니로 이동하시겠습니까?`,
        route: ROUTE.CART,
      })
    )

  const { mutate, isLoading } = useMutation(
    () => cartAPI.addProductInCart(productInfo, session?.user.accessToken),
    {
      onSuccess: (data) => {
        if (data.status === 200) {
          queryClient.invalidateQueries(["productListInCart"])

          routeDispatch("장바구니에 상품을 담았습니다.")
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

  const addMutate = () => {
    if (isLoading) return

    const previousProductListInCart: ProductsInCart | undefined =
      queryClient.getQueryData(["productListInCart"]) ?? []

    if (
      previousProductListInCart.find(
        (prevProduct) => prevProduct.id === productInfo.id
      )
    ) {
      routeDispatch("이미 장바구니에 담긴 상품입니다.")

      return
    }

    if (CART_LIMIT <= previousProductListInCart?.length) {
      routeDispatch("장바구니에 상품이 가득 찼습니다.")

      return
    }

    if (shouldProceedWithRouting(!!session)) {
      mutate()
    }
  }

  return { addMutate, isLoading }
}
