import CheckoutLayout from "@/features/checkout/views/CheckoutLayout"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "결제 - 12ST",
  description: "상품 결제",
}

const CheckoutPage = () => {
  return <CheckoutLayout />
}

export default CheckoutPage
