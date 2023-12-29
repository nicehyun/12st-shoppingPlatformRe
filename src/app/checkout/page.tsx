import CheckoutForm from "@/features/checkout/views/CheckoutForm"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "결제 - 쇼핑 플랫폼 12ST",
}

const CheckoutPage = () => {
  return <CheckoutForm />
}

export default CheckoutPage
