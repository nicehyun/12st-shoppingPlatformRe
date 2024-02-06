import useCheckoutPrice from "@/features/checkout/hooks/useCheckoutPrice"
import CheckoutSection from "../CheckoutSection"
import { useCheckoutPendingProductList } from "../../hooks/useCheckoutPendingProductList"
import CheckoutPendingProduct from "./CheckoutPendingProduct"
import DetailButton from "./DetailButton"

const CheckoutOrderListInfo = () => {
  const {
    showCheckoutPendingProductList,
    checkoutPendingProductList,
    isShowDetail,
    toggleShowDetail,
  } = useCheckoutPendingProductList()

  const { calculatedDiscountPerProductArr } = useCheckoutPrice()

  return (
    <CheckoutSection>
      <h3 className="py-[18px] font-bold">주문상품 정보</h3>
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
    </CheckoutSection>
  )
}

export default CheckoutOrderListInfo
