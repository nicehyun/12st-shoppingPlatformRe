"use client"

import ViewPortConditionComponent from "@/common/views/ViewPortConditionComponent"
import CartController from "./CartController"

import CouponBar from "./CouponBar"
import ProductListInCart from "./ProductListInCart"
import TotalPriceInfo from "./TotalPriceInfo"

const CartLayout = () => {
  return (
    <div className="max-w-[1050px] mx-auto">
      <div className="lg:flex xl:flex mb-[40px]">
        <ProductListInCart />

        <ViewPortConditionComponent type="pc" component={<CouponBar />} />
      </div>

      <div className="sm:flex md:flex">
        <TotalPriceInfo />
        <ViewPortConditionComponent type="mobile" component={<CouponBar />} />
      </div>

      <CartController />
    </div>
  )
}

export default CartLayout
