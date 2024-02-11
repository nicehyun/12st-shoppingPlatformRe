import React from "react"
import MyPageListContentLayout from "../MyPageListContentLayout"
import { useAppDispatch } from "@/redux/hooks"
import {
  SelectedCheckoutInfo,
  selectCheckoutInfo,
} from "@/redux/features/myPageSlice"
import { hideBasicModal } from "@/redux/features/modalSlice"
import { ProductInCart } from "@/features/cart/types/cart"
import { CheckoutPaymentInfo } from "@/features/checkout/types/checkout"
import MyPageTableContentEl from "../MyPageTableContentEl"
import { parseISOString } from "@/features/checkout/utils/checkout"

interface ICheckoutNumberToCheckoutPairContent {
  checkoutNumberToCheckoutInfoPair: {
    product: ProductInCart
    checkoutNumber: string
    checkoutDate: string
    payment: CheckoutPaymentInfo
  }
}

const CheckoutNumberToCheckoutPairContent = ({
  checkoutNumberToCheckoutInfoPair,
}: ICheckoutNumberToCheckoutPairContent) => {
  const dispatch = useAppDispatch()

  const handleCheckoutInfoSelect = (checkoutInfo: SelectedCheckoutInfo) => {
    dispatch(selectCheckoutInfo(checkoutInfo))
    dispatch(hideBasicModal())
  }
  return (
    <MyPageListContentLayout
      onClick={() => handleCheckoutInfoSelect(checkoutNumberToCheckoutInfoPair)}
      className="group hover:cursor-pointer"
    >
      <MyPageTableContentEl
        content={checkoutNumberToCheckoutInfoPair.checkoutNumber ?? ""}
        className="break-words group-hover:text-lightRed w-1/4"
      />

      <MyPageTableContentEl
        className="w-1/4 text-lightBlack"
        content={`${
          parseISOString(checkoutNumberToCheckoutInfoPair.checkoutDate).year
        }-${
          parseISOString(checkoutNumberToCheckoutInfoPair.checkoutDate).month
        }-${
          parseISOString(checkoutNumberToCheckoutInfoPair.checkoutDate).date
        }`}
      />
      <MyPageTableContentEl
        content={checkoutNumberToCheckoutInfoPair.product.name}
        className="truncate-2 w-1/2"
        NoCenter
      />
    </MyPageListContentLayout>
  )
}

export default CheckoutNumberToCheckoutPairContent
