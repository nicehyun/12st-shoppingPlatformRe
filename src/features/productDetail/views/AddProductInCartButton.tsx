"use client"

import { useAddToCartMutaion } from "@/features/cart/hooks/useAddToCartMutaion"
import { ProductsInCart } from "@/features/cart/types/cart"
import { ROUTE } from "@/features/common/hooks/useNavigations"
import { Product } from "@/features/common/types/product"
import LoadingButton from "@/features/common/views/LoadingButton"
import { showRouteModal } from "@/redux/features/modalSlice"
import { useAppDispatch } from "@/redux/hooks"
import { useQueryClient } from "@tanstack/react-query"
import { validCheckAddProductToCart } from "../../cart/models/validateCheck"
import { useSessionQuery } from "@/features/auth/signIn/hooks/useSessionQuery"
import { useConditionalSignInRoute } from "@/features/common/hooks/useConditionalSignInRoute"
import { useFetchValidGard } from "@/features/common/hooks/useFetchValidGard"

interface IAddProductInCartButton {
  productDetail: Product
  isLoading: boolean
}

const AddProductInCartButton = ({
  productDetail,
  isLoading,
}: IAddProductInCartButton) => {
  const dispatch = useAppDispatch()
  const queryClient = useQueryClient()
  const { session } = useSessionQuery()
  const { shouldProceedWithRouting } = useConditionalSignInRoute()
  const { handleShowFetchGardFeedbackModal } = useFetchValidGard()

  const routeDispatch = (routeModalContent: string) =>
    dispatch(
      showRouteModal({
        modalId: "cart-route-modal",
        modalTitle: "",
        modalContent: `${routeModalContent} 장바구니로 이동하시겠습니까?`,
        route: ROUTE.CART,
      })
    )

  const { mutateAsync, isLoading: isAddToCartLoading } =
    useAddToCartMutaion(productDetail)

  const handleProductInCartAdd = async () => {
    if (isAddToCartLoading) return

    const previousProductListInCart: ProductsInCart =
      queryClient.getQueryData(["productListInCart"]) ?? []

    handleShowFetchGardFeedbackModal(
      validCheckAddProductToCart(productDetail, previousProductListInCart)
    )

    if (shouldProceedWithRouting(!!session)) {
      const response = await mutateAsync()

      if (response.status === 200) {
        routeDispatch("상품이 장바구니에 담겼습니다.")
      }
    }
  }

  return (
    <LoadingButton
      isDisabled={isLoading}
      isLoading={isAddToCartLoading}
      onClick={handleProductInCartAdd}
      content="장바구니 담기"
      className="border-border border-[1px]"
    />
  )
}

export default AddProductInCartButton
