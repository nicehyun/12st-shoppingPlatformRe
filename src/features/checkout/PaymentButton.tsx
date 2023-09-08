import { MouseEvent } from "react"

export type Payment =
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
  onChangePaymentValue: (paymentValue: Payment, selecedPayment: string) => void
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
      onClick={() => onChangePaymentValue(paymentButtonValue, buttonContent)}
      className={`border-[1px] border-border h-[40px] text-[12px] md:text-[14px] lg:text-[16px] xl:text-[16px] ${
        paymentValue === paymentButtonValue
          ? "bg-black dark:bg-white text-lightRed"
          : "bg-border dark:bg-lightBlack text-black"
      }`}
    >
      {buttonContent}
    </button>
  )
}

export default PaymentButton
