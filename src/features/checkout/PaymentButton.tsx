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
      className={`border-[1px] h-[40px] text-[12px] md:text-[14px] lg:text-[16px] xl:text-[16px] ${
        paymentValue === paymentButtonValue
          ? "bg-black dark:bg-white text-lightRed border-black dark:border-white"
          : "bg-white dark:bg-border text-black border-border"
      }`}
    >
      {buttonContent}
    </button>
  )
}

export default PaymentButton
