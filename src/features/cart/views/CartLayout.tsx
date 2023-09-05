"use client"

import MobileViewConditionComponent from "@/common/views/MobileViewConditionComponent"
import PcConditionComponent from "@/common/views/PcConditionComponent"

import CartController from "./CartController"

import CouponBar from "./CouponBar"
import ProductListInCart from "./ProductListInCart"
import TotalPriceInfo from "./TotalPriceInfo"

const CartLayout = () => {
  return (
    <div className="max-w-[1050px] mx-auto">
      <div className="lg:flex xl:flex mb-[40px]">
        <ProductListInCart />

        <PcConditionComponent component={<CouponBar />} />
      </div>

      <div className="sm:flex md:flex">
        <TotalPriceInfo />
        <MobileViewConditionComponent component={<CouponBar />} />
      </div>

      <CartController />
    </div>
  )
}

export default CartLayout
