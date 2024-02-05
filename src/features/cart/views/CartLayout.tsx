import CartRouteController from "./CartRouteController"
import CartPriceInfo from "./CartPriceInfo"
import ProductListInCart from "./ProductListInCart"
import ProductListInCartLayout from "./ProductListInCartLayout"

const CartLayout = () => {
  return (
    <div className="max-w-[1050px] mx-auto">
      <ProductListInCartLayout>
        <ProductListInCart />
      </ProductListInCartLayout>

      <CartPriceInfo />

      <CartRouteController />
    </div>
  )
}

export default CartLayout
