"use client"

import {
  resetSelectPayment,
  selectCheckoutPaymentState,
} from "@/redux/features/checkoutSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { useEffect, useState } from "react"
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai"
import CreditSelect from "./CreditSelect"
import InstallmentPeriodSelect from "./InstallmentPeriodSelect"
import PaymentBenefit from "./PaymentBenefit"
import PaymentList from "../../layout/views/PaymentList"
import Button from "@/features/common/views/Button"

const CheckoutPayment = () => {
  const [isShowDetail, setIsShowDetail] = useState(true)

  const checkoutPaymentState = useAppSelector(selectCheckoutPaymentState)
  const dispatch = useAppDispatch()

  const toggleShowDetail = () => {
    setIsShowDetail((prev) => !prev)
  }

  useEffect(() => {
    dispatch(resetSelectPayment())
  }, [])

  return (
    <section className="border-t-[2px] border-black">
      <div className="flex justify-between py-[18px] font-bold border-b-[1px] border-border">
        <h3>결제방법</h3>

        <div className="flex items-center">
          <p className="text-[14px] md:text-[12px] sm:text-[12px] text-border">
            {checkoutPaymentState.label}
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
