"use client"

import CartController from "./CartController"
import ProductListInCart from "./ProductListInCart"

const CartLayout = () => {
  return (
    <div className="max-w-[1050px] mx-auto">
      <ProductListInCart />

      <CartController />
    </div>
  )
}

export default CartLayout
