import CheckoutConfirmed from "@/features/checkoutConfirmed/views/CheckoutConfirmed"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "결제 완료 - 쇼핑 플랫폼 12ST",
}

const CheckoutConfirmedPage = () => {
  return <CheckoutConfirmed />
}

export default CheckoutConfirmedPage
