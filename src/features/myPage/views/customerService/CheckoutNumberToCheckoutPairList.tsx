"use client"

import useCheckoutNumberToProductInfoPair from "../../hooks/useCheckoutNumberToProductInfoPair"
import MyPageListNoneContents from "../MyPageListNoneContents"
import CheckoutNumberToCheckoutPairContent from "./CheckoutNumberToCheckoutPairContent"
import SkeletonCheckoutNumberToCheckoutPairList from "./SkeletonCheckoutNumberToCheckoutPairList"

const CheckoutNumberToCheckoutPairList = () => {
  const { checkoutNumberToCheckoutInfoPairList, isLoading } =
    useCheckoutNumberToProductInfoPair()

  if (isLoading) {
    return <SkeletonCheckoutNumberToCheckoutPairList />
  }

  if (checkoutNumberToCheckoutInfoPairList.length === 0) {
    return <MyPageListNoneContents />
  }

  return (
    <ul>
      {checkoutNumberToCheckoutInfoPairList.map(
        (checkoutNumberToCheckoutInfoPair, index) => (
          <CheckoutNumberToCheckoutPairContent
            checkoutNumberToCheckoutInfoPair={checkoutNumberToCheckoutInfoPair}
            key={`checkoutNumberToCheckoutInfoPair__${checkoutNumberToCheckoutInfoPair.product.id}-${index}`}
          />
        )
      )}
    </ul>
  )
}

export default CheckoutNumberToCheckoutPairList
