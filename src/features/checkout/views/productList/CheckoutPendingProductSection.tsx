import CheckoutSection from "../CheckoutSection"
import CheckoutPendingProductList from "./CheckoutPendingProductList"

const CheckoutPendingProductSection = () => {
  return (
    <CheckoutSection>
      <h3 className="py-[18px] font-bold">주문상품 정보</h3>

      <CheckoutPendingProductList />
    </CheckoutSection>
  )
}

export default CheckoutPendingProductSection
