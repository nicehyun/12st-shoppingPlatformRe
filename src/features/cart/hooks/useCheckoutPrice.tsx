import {
  accumulationOfProductsPrice,
  priceToUseCoupon,
} from "@/common/utils/price"
import { selectCheckedProductList } from "@/redux/features/cartSlice"
import { selectSelectedCoupon } from "@/redux/features/couponSlice"
import { useAppSelector } from "@/redux/hooks"
import { useProductListInCartQuery } from "./useProductListInCartQuery"

const useCheckoutPrice = () => {
  const { productListInCart } = useProductListInCartQuery()

  const checkedProductList = useAppSelector(selectCheckedProductList)
  const seletedCoupon = useAppSelector(selectSelectedCoupon)

  const totalPriceOfCheckedProduct = accumulationOfProductsPrice(
    productListInCart?.filter((product) =>
      checkedProductList.includes(product.id)
    )
  )

  const discountedPriceWithCoupon =
    seletedCoupon && totalPriceOfCheckedProduct
      ? priceToUseCoupon(seletedCoupon, totalPriceOfCheckedProduct)
      : 0

  return { totalPriceOfCheckedProduct, discountedPriceWithCoupon }
}

export default useCheckoutPrice
