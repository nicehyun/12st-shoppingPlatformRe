import { BiMinus, BiPlus } from "react-icons/bi"
import useCheckoutPrice from "../hooks/useCheckoutPrice"
import TotalPriceEl from "./TotalPriceEl"

const TotalPriceList = () => {
  const {
    discountedPriceWithCoupon,
    totalPriceOfCheckedProduct,
    totalDeliveryFee,
  } = useCheckoutPrice()
  return (
    <>
      <TotalPriceEl
        individualTitle="총 상품금액"
        price={totalPriceOfCheckedProduct}
      />
      <TotalPriceEl
        individualTitle="쿠폰 사용"
        price={discountedPriceWithCoupon}
        icon={<BiMinus />}
      />
      <TotalPriceEl
        individualTitle="마일리지 사용"
        price={0}
        icon={<BiMinus />}
      />
      <TotalPriceEl
        individualTitle="배송비"
        price={totalDeliveryFee}
        icon={<BiPlus />}
      />
      <TotalPriceEl
        individualTitle="총 결제금액"
        price={
          totalPriceOfCheckedProduct -
          discountedPriceWithCoupon +
          totalDeliveryFee
        }
        isFinalPrice={true}
      />
    </>
  )
}

export default TotalPriceList
