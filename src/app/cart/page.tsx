import CartLayout from "@/features/cart/views/CartLayout"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "장바구니 - 12ST",
  description: "Shopping Platform Cart",
}

const CartPage = () => {
  return <CartLayout />
}

export default CartPage
