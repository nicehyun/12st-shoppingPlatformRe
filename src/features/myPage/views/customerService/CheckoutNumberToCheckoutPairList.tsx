"use client"

import { useGetCheckoutListQuery } from "@/features/checkout/hooks/useGetCheckoutListQuery"
import MyPageListNoneContents from "../MyPageListNoneContents"
import CheckoutNumberToCheckoutPairContent from "./CheckoutNumberToCheckoutPairContent"
import SkeletonCheckoutNumberToCheckoutPairList from "./SkeletonCheckoutNumberToCheckoutPairList"

const CheckoutNumberToCheckoutPairList = () => {
  const { checkoutList, isLoading } = useGetCheckoutListQuery()

  if (isLoading) {
    return <SkeletonCheckoutNumberToCheckoutPairList />
  }

  const checkoutNumberToCheckoutInfoPairList = checkoutList.flatMap(
    (checkoutEl) => {
      const { productList, checkoutNumber, checkoutDate, payment } = checkoutEl
      const pairList = productList.map((product) => ({
        product,
        checkoutNumber: checkoutNumber,
        checkoutDate: checkoutDate,
        payment,
      }))
      return pairList
    }
  )

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
