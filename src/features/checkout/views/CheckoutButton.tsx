import { numberToLocaleString } from "@/common/utils/price"
import Loading from "@/common/views/Loading"
import useCheckoutPrice from "@/features/checkout/hooks/useCheckoutPrice"
import { selectCheckoutPlannedUseMileState } from "@/redux/features/checkoutSlice"
import { useAppSelector } from "@/redux/hooks"

interface ICheckoutButton {
  isCheckoutLoading: boolean
}

const CheckoutButton = ({ isCheckoutLoading }: ICheckoutButton) => {
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
      className="fixed bottom-0 left-0 right-0 z-20 min-h-[76px] py-[25px] lg:py-[36px] xl:py-[40px] text-[20px] lg:text-[22px] xl:text-[24px] tracking-[1.5px] bg-black dark:bg-lightRed text-lightRed dark:text-white font-bold "
    >
      {isCheckoutLoading ? (
        <Loading
          spinnerSize={{ height: "h-[26px]", width: "w-[26px]" }}
          isFrame={false}
        />
      ) : (
        <span>{numberToLocaleString(totalCheckoutPirce)}원 결제하기</span>
      )}
    </button>
  )
}

export default CheckoutButton
