"use client"
import { numberToLocaleString } from "@/features/common/utils/price"
import Button from "@/features/common/views/Button"
import useCheckoutPrice from "@/features/checkout/hooks/useCheckoutPrice"
import TotalPriceList from "@/features/checkout/views/TotalPriceList"
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
          <Button
            onClick={toggleShowDetail}
            classNames={`${
              isShowDetail ? "text-border" : "text-black dark:text-white"
            } text-[20px] ml-[10px]`}
            content={isShowDetail ? <AiOutlineUp /> : <AiOutlineDown />}
          />
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
