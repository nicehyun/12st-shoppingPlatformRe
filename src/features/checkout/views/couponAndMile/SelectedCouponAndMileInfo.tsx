import { useSelectCoupon } from "../../hooks/useSelectCoupon"
import { useAppSelector } from "@/redux/hooks"
import { selectCheckoutPlannedUseMileState } from "@/redux/features/checkoutSlice"
import { ReactNode } from "react"

interface ISelectedCouponInfo {
  children: ReactNode
}

const SelectedCouponAndMileInfo = ({ children }: ISelectedCouponInfo) => {
  const { selectedCoupon } = useSelectCoupon()

  const checkoutPlannedUseMileState = useAppSelector(
    selectCheckoutPlannedUseMileState
  )

  return (
    <div className="flex items-center">
      <p className="text-[14px] md:text-[12px] sm:text-[12px] text-border">
        쿠폰 {selectedCoupon ? "적용" : "미적용"} /{" "}
        {checkoutPlannedUseMileState}P 사용
      </p>

      {children}
    </div>
  )
}

export default SelectedCouponAndMileInfo
