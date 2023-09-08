"use client"

import { MouseEvent, useState } from "react"
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai"
import PaymentButton from "./PaymentButton"

const CheckoutPayment = () => {
  const [isShowDetail, setIsShowDetail] = useState(false)
  const [payment, setPayment] = useState("신용/체크카드")

  const toggleShowDetail = () => {
    setIsShowDetail((prev) => !prev)
  }

  const handlePaymentChange = (e: MouseEvent<HTMLButtonElement>) => {
    const paymentValue = e.currentTarget.value
    console.log(paymentValue)
    setPayment(paymentValue)
  }

  return (
    <div className="border-t-[2px] border-black">
      <div className="flex justify-between py-[18px] font-bold border-b-[1px] border-border">
        <h3>결제방법</h3>

        <div className="flex">
          <p className="text-[14px] text-border">{payment}</p>
          <button
            onClick={toggleShowDetail}
            type="button"
            className={`${
              isShowDetail ? "text-border" : "text-black"
            } text-[20px] ml-[10px]`}
          >
            {isShowDetail ? <AiOutlineUp /> : <AiOutlineDown />}
          </button>
        </div>
      </div>

      <div className="py-[18px]">
        <button
          type="button"
          className="w-full text-end text-lightGray mb-[50px]"
        >
          <u>신용/체크카드 안내</u>
        </button>

        <div className="grid grid-cols-4 xl:grid-cols-2 gap-4">
          <PaymentButton
            buttonContent="신용/체크카드"
            paymentButtonValue="credit"
            onChangePaymentValue={handlePaymentChange}
            paymentValue={payment}
          />
          <PaymentButton
            buttonContent="토스페이"
            paymentButtonValue="tosspay"
            onChangePaymentValue={handlePaymentChange}
            paymentValue={payment}
          />

          <PaymentButton
            buttonContent="네이버페이"
            paymentButtonValue="naverpay"
            onChangePaymentValue={handlePaymentChange}
            paymentValue={payment}
          />

          <PaymentButton
            buttonContent="카카오페이"
            paymentButtonValue="kakaopay"
            onChangePaymentValue={handlePaymentChange}
            paymentValue={payment}
          />

          <PaymentButton
            buttonContent="삼성페이"
            paymentButtonValue="samsungpay"
            onChangePaymentValue={handlePaymentChange}
            paymentValue={payment}
          />

          <PaymentButton
            buttonContent="페이코"
            paymentButtonValue="payco"
            onChangePaymentValue={handlePaymentChange}
            paymentValue={payment}
          />

          <PaymentButton
            buttonContent="SSG 페이"
            paymentButtonValue="SSGpay"
            onChangePaymentValue={handlePaymentChange}
            paymentValue={payment}
          />

          <PaymentButton
            buttonContent="무통장입금"
            paymentButtonValue="deposit"
            onChangePaymentValue={handlePaymentChange}
            paymentValue={payment}
          />
        </div>
      </div>
    </div>
  )
}

export default CheckoutPayment
