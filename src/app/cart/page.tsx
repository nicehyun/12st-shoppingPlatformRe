import CartLayout from "@/features/cart/views/CartLayout"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "장바구니 - 12ST",
  description: "장바구니",
}

// TODO :  cart 최적화 진행 하기
const CartPage = () => {
  return <CartLayout />
}

export default CartPage
