import CheckoutConfirmed from "@/features/checkoutConfirmed/views/CheckoutConfirmed"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "결제 완료 - 12ST",
  description: "상품 결제 완료",
}

const CheckoutConfirmedPage = () => {
  return <CheckoutConfirmed />
}

export default CheckoutConfirmedPage
