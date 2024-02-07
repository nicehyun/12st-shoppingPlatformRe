import { selectCheckoutPaymentState } from "@/redux/features/checkoutSlice"
import { useAppSelector } from "@/redux/hooks"
import CheckoutSectionHeader from "../CheckoutSectionHeader"
import { ReactNode } from "react"

interface IPaymentHeader {
  children: ReactNode
}

const PaymentHeader = ({ children }: IPaymentHeader) => {
  const checkoutPaymentState = useAppSelector(selectCheckoutPaymentState)

  return (
    <CheckoutSectionHeader>
      <h3>결제방법</h3>

      <div className="flex items-center">
        <p className="text-[14px] md:text-[12px] sm:text-[12px] text-border">
          {checkoutPaymentState.label}
        </p>

        {children}
      </div>
    </CheckoutSectionHeader>
  )
}

export default PaymentHeader
