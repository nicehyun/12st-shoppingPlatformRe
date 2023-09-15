"use client"

import { useState } from "react"
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai"
import CreditSelect from "./CreditSelect"
import InstallmentPeriodSelect from "./InstallmentPeriodSelect"
import PaymentBenefit from "./PaymentBenefit"
import { Payment } from "./PaymentButton"
import PaymentList from "./PaymentList"

const CheckoutPayment = () => {
  const [isShowDetail, setIsShowDetail] = useState(false)
  const [payment, setPayment] = useState({
    value: "credit",
    label: "신용/체크카드",
  })

  const toggleShowDetail = () => {
    setIsShowDetail((prev) => !prev)
  }

  const handlePaymentChange = (
    paymentValue: Payment,
    selecedPayment: string
  ) => {
    setPayment({ value: paymentValue, label: selecedPayment })
  }

  return (
    <div className="border-t-[2px] border-black">
      <div className="flex justify-between py-[18px] font-bold border-b-[1px] border-border">
        <h3>결제방법</h3>

        <div className="flex items-center">
          <p className="text-[14px] md:text-[12px] sm:text-[12px] text-border">
            {payment.label}
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
          isShowDetail ? "visible max-h-[500px]" : "invisible max-h-0"
        } transition-max-h transition-p transition-3`}
      >
        <PaymentList payment={payment} onChangePayment={handlePaymentChange} />

        {payment.value === "credit" && (
          <>
            <CreditSelect />
            <InstallmentPeriodSelect />
          </>
        )}

        <PaymentBenefit />
      </div>
    </div>
  )
}

export default CheckoutPayment
