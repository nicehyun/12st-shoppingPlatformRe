import Loading from "@/features/common/views/Loading"
import { Suspense } from "react"
import CartController from "./CartController"
import CartPriceInfo from "./CartPriceInfo"

import ProductListInCart from "./ProductListInCart"

const CartLayout = () => {
  return (
    <div className="max-w-[1050px] mx-auto">
      <Suspense
        fallback={
          <Loading
            spinnerSize={{ width: "w-[50px]", height: "h-[50px]" }}
            height="h-[400px]"
            isFrame={false}
          />
        }
      >
        <ProductListInCart />
      </Suspense>

      <CartPriceInfo />

      <CartController />
    </div>
  )
}

export default CartLayout
