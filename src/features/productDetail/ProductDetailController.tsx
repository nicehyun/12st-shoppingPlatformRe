"use client"
import Button from "@/features/common/views/Button"
import { cartAPI } from "../cart/models/cartAPI"
import { Product } from "../common/types/product"
import useSessionQuery from "../auth/signIn/hooks/useSessionQuery"
import { useAppDispatch } from "@/redux/hooks"
import { showRouteModal } from "@/redux/features/modalSlice"
import { ROUTE, useNavigations } from "../common/hooks/useNavigations"
import { addCheckoutPendingProductList } from "@/redux/features/checkoutSlice"
import { useAuthenticate } from "../auth/signIn/hooks/useAuthenticate"

interface IProductDetailController {
  productDetail: Product
}

const ProductDetailController = ({
  productDetail,
}: IProductDetailController) => {
  const { sessionQuery } = useSessionQuery()
  const dispatch = useAppDispatch()
  const { routeTo } = useNavigations()
  const { authentication } = useAuthenticate()
  const handleAddCartClick = () => {
    authentication()

    cartAPI.addProductToCart(productDetail, sessionQuery?.user.accessToken)
    dispatch(
      dispatch(
        showRouteModal({
          modalId: "signIn-route-modal",
          modalTitle: "로그인",
          modalContent:
            "장바구니에 상품을 담았습니다. 장바구니로 이동하시겠습니까?",
          route: ROUTE.CART,
        })
      )
    )
  }

  const handleCheckoutClick = () => {
    authentication()

    if (sessionQuery) {
      dispatch(addCheckoutPendingProductList([{ ...productDetail, amount: 1 }]))
      routeTo(ROUTE.CHECKOUT)
    }
  }

  return (
    <div className="mt-[20px] grid grid-cols-2 gap-[10px] h-[50px] font-bold">
      <Button
        onClick={handleAddCartClick}
        content="장바구니 담기"
        classNames="border-border border-[1px]"
      />
      <Button
        onClick={handleCheckoutClick}
        content="바로 구매하기"
        classNames="bg-black text-white dark:bg-white dark:text-black shadow dark:shadow-whiteShadow"
      />
    </div>
  )
}

export default ProductDetailController
