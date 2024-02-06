import { useFeedbackModal } from "@/features/common/hooks/useFeedbackModal"
import { ROUTE, useNavigations } from "@/features/common/hooks/useNavigations"
import { selectCheckoutPendingProductListState } from "@/redux/features/checkoutSlice"
import { useAppSelector } from "@/redux/hooks"
import { useEffect, useState } from "react"

export const useCheckoutPendingProductList = () => {
  const { routeTo } = useNavigations()
  const { showFeedbackModalWithContent } = useFeedbackModal()
  const checkoutPendingProductList = useAppSelector(
    selectCheckoutPendingProductListState
  )

  const [isShowDetail, setIsShowDetail] = useState(false)

  const showCheckoutPendingProductList = isShowDetail
    ? checkoutPendingProductList
    : checkoutPendingProductList.slice(0, 1)

  const toggleShowDetail = () => {
    setIsShowDetail((prev) => !prev)
  }

  useEffect(() => {
    if (checkoutPendingProductList.length === 0) {
      showFeedbackModalWithContent(
        "결제 상품이 존재하지 않아 장바구니로 이동합니다."
      )
      routeTo(ROUTE.CART)
    }
  }, [checkoutPendingProductList])

  return {
    showCheckoutPendingProductList,
    toggleShowDetail,
    isShowDetail,
    checkoutPendingProductList,
  }
}
