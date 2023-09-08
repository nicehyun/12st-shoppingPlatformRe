import { MouseEvent } from "react"

type Payment =
  | "credit"
  | "tosspay"
  | "naverpay"
  | "kakaopay"
  | "samsungpay"
  | "payco"
  | "SSGpay"
  | "deposit"

interface IPaymentButton {
  paymentValue: string
  paymentButtonValue: Payment
  onChangePaymentValue: (e: MouseEvent<HTMLButtonElement>) => void
  buttonContent: string
}

const PaymentButton = ({
  paymentValue,
  paymentButtonValue,
  onChangePaymentValue,
  buttonContent,
}: IPaymentButton) => {
  return (
    <button
      type="button"
      value={paymentButtonValue}
      onClick={onChangePaymentValue}
      className={`border-[1px] border-border h-[40px] text-[12px] md:text-[14px] lg:text-[16px] xl:text-[16px] ${
        paymentValue === paymentButtonValue
          ? "bg-white text-lightRed"
          : "bg-lightBlack text-black"
      }`}
    >
      {buttonContent}
    </button>
  )
}

export default PaymentButton
