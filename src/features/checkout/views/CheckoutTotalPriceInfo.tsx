"use client"
import { numberToLocaleString } from "@/common/utils/price"
import useCheckoutPrice from "@/features/cart/hooks/useCheckoutPrice"
import TotalPriceList from "@/features/cart/views/TotalPriceList"
import { selectCheckoutPlannedUseMileState } from "@/redux/features/checkoutSlice"
import { useAppSelector } from "@/redux/hooks"
import { useState } from "react"
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai"

const CheckoutTotalPriceInfo = () => {
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

  const [isShowDetail, setIsShowDetail] = useState(true)

  const toggleShowDetail = () => {
    setIsShowDetail((prev) => !prev)
  }

  return (
    <section className="border-t-[2px] border-black">
      <div className="flex items-center justify-between py-[18px] font-bold border-b-[1px] border-border">
        <h3>결제금액</h3>

        <div className="flex">
          <p className="text-[18px] text-lightRed">
            {numberToLocaleString(totalCheckoutPirce)}
            <span className="text-[12px]">원</span>
          </p>
          <button
            onClick={toggleShowDetail}
            type="button"
            className={`${
              isShowDetail ? "text-border" : "text-black dark:text-white"
            } text-[20px] ml-[10px]`}
          >
            {isShowDetail ? <AiOutlineUp /> : <AiOutlineDown />}
          </button>
        </div>
      </div>

      <div
        className={`opacity-${isShowDetail ? "100" : "0"} ${
          isShowDetail ? "visible max-h-[500px] py-[30px]" : "invisible max-h-0"
        } transition-max-h transition-3 `}
      >
        <TotalPriceList />
      </div>
    </section>
  )
}

export default CheckoutTotalPriceInfo