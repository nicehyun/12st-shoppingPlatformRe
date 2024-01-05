import CartLayout from "@/features/cart/views/CartLayout"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "장바구니 - 12ST",
  description: "장바구니",
}

const CartPage = () => {
  return <CartLayout />
}

export default CartPage
