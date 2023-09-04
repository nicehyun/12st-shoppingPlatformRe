import ViewPortConditionComponent from "@/common/views/ViewPortConditionComponent"

import CouponBar from "./CouponBar"
import ProductListInCart from "./ProductListInCart"
import TotalPriceInfo from "./TotalPriceInfo"

const CartLayout = () => {
  return (
    <div className="mb-[40px]">
      <div className="lg:flex xl:flex">
        <ProductListInCart />

        <ViewPortConditionComponent type="pc" component={<CouponBar />} />
      </div>

      <div className="sm:flex md:flex">
        <TotalPriceInfo />
        <ViewPortConditionComponent type="mobile" component={<CouponBar />} />
      </div>
    </div>
  )
}

export default CartLayout
