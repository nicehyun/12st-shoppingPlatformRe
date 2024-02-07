import { numberToLocaleString } from "@/features/common/utils/price"
import CheckoutSectionHeader from "../CheckoutSectionHeader"
import useCheckoutPrice from "../../hooks/useCheckoutPrice"
import { useAppSelector } from "@/redux/hooks"
import { selectCheckoutPlannedUseMileState } from "@/redux/features/checkoutSlice"
import { ReactNode } from "react"

interface ITotalPriceHeader {
  children: ReactNode
}

const TotalPriceHeader = ({ children }: ITotalPriceHeader) => {
  const {
    discountedPriceWithCoupon,
    totalPriceOfCheckedProduct,
    totalDeliveryFee,
  } = useCheckoutPrice()

  const checkoutPlannedUseMileState = useAppSelector(
    selectCheckoutPlannedUseMileState
  )

  const totalCheckoutPirce =
    totalPriceOfCheckedProduct -
    discountedPriceWithCoupon -
    checkoutPlannedUseMileState +
    totalDeliveryFee
  return (
    <CheckoutSectionHeader>
      <h3>결제금액</h3>

      <div className="flex">
        <p className="text-[18px] text-lightRed">
          {numberToLocaleString(totalCheckoutPirce)}
          <span className="text-[12px]">원</span>
        </p>

        {children}
      </div>
    </CheckoutSectionHeader>
  )
}

export default TotalPriceHeader
