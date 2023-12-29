import CartLayout from "@/features/cart/views/CartLayout"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "장바구니 - 쇼핑 플랫폼 12ST",
}

const CartPage = () => {
  return <CartLayout />
}

export default CartPage
