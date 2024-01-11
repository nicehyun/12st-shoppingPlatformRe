"use client"
import Button from "@/features/common/views/Button"
import { Product } from "../../common/types/product"
import useSessionQuery from "../../auth/signIn/hooks/useSessionQuery"
import { useAppDispatch } from "@/redux/hooks"
import { ROUTE, useNavigations } from "../../common/hooks/useNavigations"
import { addCheckoutPendingProductList } from "@/redux/features/checkoutSlice"
import { useAuthenticate } from "../../auth/signIn/hooks/useAuthenticate"
import { useAddToCartMutaion } from "../../cart/hooks/useAddToCartMutaion"
import Loading from "@/features/common/views/Loading"
import { ReactNode } from "react"

// TODO : 수정코드 테스츠하기
interface IProductDetailController {
  children: ReactNode
}

const ProductDetailController = ({ children }: IProductDetailController) => {
  // const { sessionQuery } = useSessionQuery()
  // const { addMutate, isLoading } = useAddToCartMutaion(productDetail)
  // const dispatch = useAppDispatch()
  // const { routeTo } = useNavigations()
  // const { authentication } = useAuthenticate()
  // const handleAddCartClick = async () => {
  // if (isLoading) return

  // authentication()

  // await addMutateAsync()
  // dispatch(
  //   showRouteModal({
  //     modalId: "signIn-route-modal",
  //     modalTitle: "",
  //     modalContent:
  //       "장바구니에 상품을 담았습니다. 장바구니로 이동하시겠습니까?",
  //     route: ROUTE.CART,
  //   })
  // )
  // }

  // const handleCheckoutClick = async () => {
  //   await authentication()

  //   // if (sessionQuery) {
  //   dispatch(addCheckoutPendingProductList([{ ...productDetail, amount: 1 }]))
  //   routeTo(ROUTE.CHECKOUT)
  //   // }
  // }

  return (
    <div className="mt-[20px] grid grid-cols-2 gap-[10px] h-[50px] font-bold">
      {children}
    </div>
  )
}

export default ProductDetailController
