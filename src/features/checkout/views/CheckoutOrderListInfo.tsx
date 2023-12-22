import useCheckoutPrice from "@/features/checkout/hooks/useCheckoutPrice"

import { useAppSelector } from "@/redux/hooks"
import { useState } from "react"
import CheckoutOrderListDetailButton from "./CheckoutOrderListDetailButton"

import CheckoutOrderListEl from "./CheckoutOrderListEl"
import { selectCheckoutPendingProductListState } from "@/redux/features/checkoutSlice"

const CheckoutOrderListInfo = () => {
  const [isShowDetail, setIsShowDetail] = useState(false)
  const checkoutPendingProductList = useAppSelector(
    selectCheckoutPendingProductListState
  )

  const { calculatedDiscountPerProductArr } = useCheckoutPrice()

  const renderProductList = () => {
    if (isShowDetail) {
      return checkoutPendingProductList.map((product, index) => (
        <CheckoutOrderListEl
          key={`order-${product.id}`}
          productInfo={product}
          discountPerProduct={calculatedDiscountPerProductArr[index]}
        />
      ))
    } else {
      if (checkoutPendingProductList.length > 0) {
        const product = checkoutPendingProductList[0]
        return (
          <CheckoutOrderListEl
            key={`order-${product.id}`}
            productInfo={product}
            discountPerProduct={calculatedDiscountPerProductArr[0]}
          />
        )
      } else {
        return null
      }
    }
  }

  const toggleShowDetail = () => {
    setIsShowDetail((prev) => !prev)
  }

  return (
    <section className="border-t-[2px] border-black">
      <h3 className="py-[18px] font-bold">주문상품 정보</h3>
      <ul>{renderProductList()}</ul>

      {checkoutPendingProductList.length > 1 && (
        <CheckoutOrderListDetailButton
          isShowDetail={isShowDetail}
          onClickDetail={toggleShowDetail}
          orderListAmount={checkoutPendingProductList.length}
        />
      )}
    </section>
  )
}

export default CheckoutOrderListInfo
