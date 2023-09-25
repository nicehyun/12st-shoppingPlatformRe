"use client"

import { selectCheckoutPaymentState } from "@/redux/features/checkoutSlice"
import { useAppSelector } from "@/redux/hooks"
import { useState } from "react"
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai"
import CreditSelect from "./CreditSelect"
import InstallmentPeriodSelect from "./InstallmentPeriodSelect"
import PaymentBenefit from "./PaymentBenefit"
import PaymentList from "./PaymentList"

const CheckoutPayment = () => {
  const [isShowDetail, setIsShowDetail] = useState(true)

  const checkoutPaymentState = useAppSelector(selectCheckoutPaymentState)

  const toggleShowDetail = () => {
    setIsShowDetail((prev) => !prev)
  }

  return (
    <section className="border-t-[2px] border-black">
      <div className="flex justify-between py-[18px] font-bold border-b-[1px] border-border">
        <h3>결제방법</h3>

        <div className="flex items-center">
          <p className="text-[14px] md:text-[12px] sm:text-[12px] text-border">
            {checkoutPaymentState.label}
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
          isShowDetail
            ? "visible max-h-[500px] lg:max-h-[700px] xl:max-h-[700px]"
            : "invisible max-h-0"
        } transition-max-h transition-p transition-3`}
      >
        <PaymentList />

        {checkoutPaymentState.value === "credit" && (
          <>
            <CreditSelect />
            <InstallmentPeriodSelect />
          </>
        )}

        <PaymentBenefit />
      </div>
    </section>
  )
}

export default CheckoutPayment