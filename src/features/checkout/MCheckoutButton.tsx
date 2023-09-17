import { numberToLocaleString } from "@/common/utils/price"
import { selectCheckoutPlannedUseMileState } from "@/redux/features/checkoutSlice"
import { useAppSelector } from "@/redux/hooks"
import useCheckoutPrice from "../cart/hooks/useCheckoutPrice"

const MCheckoutButton = () => {
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
    <button
      type="submit"
      className="fixed bottom-0 left-0 right-0 z-20 min-h-[76px] py-[25px] text-[20px] bg-black dark:bg-lightRed text-lightRed dark:text-white font-bold"
    >
      {numberToLocaleString(totalCheckoutPirce)}원 결제하기
    </button>
  )
}

export default MCheckoutButton
