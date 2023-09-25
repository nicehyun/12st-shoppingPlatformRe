"use client"

import { Suspense } from "react"
import CartController from "./CartController"
import CartPriceInfo from "./CartPriceInfo"

import ProductListInCart from "./ProductListInCart"

const CartLayout = () => {
  return (
    <div className="max-w-[1050px] mx-auto">
      <Suspense fallback={<span>asdasd</span>}>
        <ProductListInCart />
      </Suspense>

      <CartPriceInfo />

      <CartController />
    </div>
  )
}

export default CartLayout
