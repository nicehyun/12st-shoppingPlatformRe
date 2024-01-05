import CheckoutForm from "@/features/checkout/views/CheckoutForm"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "결제 - 12ST",
  description: "상품 결제",
}

const CheckoutPage = () => {
  return <CheckoutForm />
}

export default CheckoutPage
