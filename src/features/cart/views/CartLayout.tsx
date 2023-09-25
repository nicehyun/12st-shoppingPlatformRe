"use client"

import CartController from "./CartController"
import CartPriceInfo from "./CartPriceInfo"

import ProductListInCart from "./ProductListInCart"

const CartLayout = () => {
  return (
    <div className="max-w-[1050px] mx-auto">
      <ProductListInCart />

      <CartPriceInfo />

      <CartController />
    </div>
  )
}

export default CartLayout
