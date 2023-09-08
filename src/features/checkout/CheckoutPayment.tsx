"use client"

import { MouseEvent, useState } from "react"
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai"
import PaymentBenefit from "./PaymentBenefit"
import PaymentButton, { Payment } from "./PaymentButton"

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

        <div className="flex">
          <p className="text-[14px] text-border">{payment.label}</p>
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
        <button
          type="button"
          className="w-full text-end text-lightGray mb-[50px] text-[14px] mt-[40px]"
        >
          <u>신용/체크카드 안내</u>
        </button>

        <div className="grid grid-cols-4 xl:grid-cols-2 gap-4 mb-[20px]">
          <PaymentButton
            buttonContent="신용/체크카드"
            paymentButtonValue="credit"
            onChangePaymentValue={handlePaymentChange}
            paymentValue={payment.value}
          />
          <PaymentButton
            buttonContent="토스페이"
            paymentButtonValue="tosspay"
            onChangePaymentValue={handlePaymentChange}
            paymentValue={payment.value}
          />

          <PaymentButton
            buttonContent="네이버페이"
            paymentButtonValue="naverpay"
            onChangePaymentValue={handlePaymentChange}
            paymentValue={payment.value}
          />

          <PaymentButton
            buttonContent="카카오페이"
            paymentButtonValue="kakaopay"
            onChangePaymentValue={handlePaymentChange}
            paymentValue={payment.value}
          />

          <PaymentButton
            buttonContent="삼성페이"
            paymentButtonValue="samsungpay"
            onChangePaymentValue={handlePaymentChange}
            paymentValue={payment.value}
          />

          <PaymentButton
            buttonContent="페이코"
            paymentButtonValue="payco"
            onChangePaymentValue={handlePaymentChange}
            paymentValue={payment.value}
          />

          <PaymentButton
            buttonContent="SSG 페이"
            paymentButtonValue="SSGpay"
            onChangePaymentValue={handlePaymentChange}
            paymentValue={payment.value}
          />

          <PaymentButton
            buttonContent="무통장입금"
            paymentButtonValue="deposit"
            onChangePaymentValue={handlePaymentChange}
            paymentValue={payment.value}
          />
        </div>

        {payment.value === "credit" && (
          <div className="border-[1px] border-border mb-[20px] h-[40px] flex items-center text-[14px] px-[10px]">
            카드사를 선택해주세요
          </div>
        )}

        <PaymentBenefit />
      </div>
    </div>
  )
}

export default CheckoutPayment
