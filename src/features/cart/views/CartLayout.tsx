import CouponBar from "./CouponBar"
import ProductListInCart from "./ProductListInCart"

const CartLayout = () => {
  return (
    <div className="flex mb-[40px]">
      <ProductListInCart />
      <CouponBar />
    </div>
  )
}

export default CartLayout
