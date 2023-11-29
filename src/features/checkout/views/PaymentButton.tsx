import Button from "@/features/common/views/Button"
import {
  selectCheckoutPaymentState,
  selectPayment,
} from "@/redux/features/checkoutSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"

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
  paymentButtonValue: Payment
  buttonContent: string
}

const PaymentButton = ({
  paymentButtonValue,
  buttonContent,
}: IPaymentButton) => {
  const dispatch = useAppDispatch()
  const checkoutPaymentState = useAppSelector(selectCheckoutPaymentState)

  const handlePaymentChange = (value: Payment, label: string) => {
    dispatch(selectPayment({ value, label }))
  }
  return (
    <Button
      value={paymentButtonValue}
      onClick={() => handlePaymentChange(paymentButtonValue, buttonContent)}
      classNames={`border-[1px] h-[40px] text-[12px] lg:text-[16px] xl:text-[16px] ${
        checkoutPaymentState.value === paymentButtonValue
          ? "bg-black dark:bg-white text-lightRed border-black dark:border-white"
          : "bg-white dark:bg-border text-black border-border"
      }`}
      content={buttonContent}
    />
  )
}

export default PaymentButton
