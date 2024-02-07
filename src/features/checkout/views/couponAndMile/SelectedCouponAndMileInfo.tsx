import Button from "@/features/common/views/Button"
import { useSelectCoupon } from "../../hooks/useSelectCoupon"
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai"
import { useAppSelector } from "@/redux/hooks"
import { selectCheckoutPlannedUseMileState } from "@/redux/features/checkoutSlice"

interface ISelectedCouponInfo {
  isShowDetail: boolean
  toggleShowDetail: () => void
}

const SelectedCouponAndMileInfo = ({
  isShowDetail,
  toggleShowDetail,
}: ISelectedCouponInfo) => {
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
      <Button
        onClick={toggleShowDetail}
        classNames={`${
          isShowDetail ? "text-border" : "text-black dark:text-white"
        } text-[20px] ml-[10px]`}
        content={isShowDetail ? <AiOutlineUp /> : <AiOutlineDown />}
      />
    </div>
  )
}

export default SelectedCouponAndMileInfo
