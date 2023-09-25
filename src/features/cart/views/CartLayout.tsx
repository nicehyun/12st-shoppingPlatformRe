"use client"

import MobileViewConditionComponent from "@/common/views/MobileViewConditionComponent"
import PcConditionComponent from "@/common/views/PcConditionComponent"

import CartController from "./CartController"

import CouponBar from "./CouponBar"
import ProductListInCart from "./ProductListInCart"
import TotalPriceInfo from "../../layout/views/TotalPriceInfo"

const CartLayout = () => {
  return (
    <div className="max-w-[1050px] mx-auto">
      <ProductListInCart />

      <CartController />
    </div>
  )
}

export default CartLayout
