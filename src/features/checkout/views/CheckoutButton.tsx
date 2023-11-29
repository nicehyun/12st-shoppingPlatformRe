import { numberToLocaleString } from "@/features/common/utils/price"
import Button from "@/features/common/views/Button"
import Loading from "@/features/common/views/Loading"
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
    <Button
      type="submit"
      classNames="fixed bottom-0 left-0 right-0 z-20 min-h-[76px] py-[25px] lg:py-[36px] xl:py-[40px] text-[24px] lg:text-[26px] xl:text-[28px] tracking-[1.5px] bg-black dark:bg-black text-lightRed font-bold border-t-[1px] border-white"
      content={
        isCheckoutLoading ? (
          <Loading
            spinnerSize={{ height: "h-[26px]", width: "w-[26px]" }}
            isFrame={false}
          />
        ) : (
          <span>{numberToLocaleString(totalCheckoutPirce)}원 결제하기</span>
        )
      }
    />
  )
}

export default CheckoutButton
