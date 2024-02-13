"use client"
import { useCheckoutPendingProductList } from "../../hooks/useCheckoutPendingProductList"
import useCheckoutPrice from "../../hooks/useCheckoutPrice"
import CheckoutPendingProduct from "./CheckoutPendingProduct"
import DetailButton from "./DetailButton"

const CheckoutPendingProductList = () => {
  const {
    showCheckoutPendingProductList,
    checkoutPendingProductList,
    isShowDetail,
    toggleShowDetail,
  } = useCheckoutPendingProductList()

  const { calculatedDiscountPerProductArr } = useCheckoutPrice()
  return (
    <>
      <ul>
        {showCheckoutPendingProductList?.map((product, index) => (
          <CheckoutPendingProduct
            key={`order-${product.id}`}
            productInfo={product}
            discountPerProduct={calculatedDiscountPerProductArr[index]}
          />
        ))}
      </ul>

      {checkoutPendingProductList.length > 1 && (
        <DetailButton
          isShowDetail={isShowDetail}
          onClickDetail={toggleShowDetail}
          productList={checkoutPendingProductList}
        />
      )}
    </>
  )
}

export default CheckoutPendingProductList
