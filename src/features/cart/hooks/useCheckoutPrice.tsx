import {
  accumulationOfProductsPrice,
  priceToUseCoupon,
} from "@/common/utils/price"
import { selectCheckedProductList } from "@/redux/features/cartSlice"
import { selectSelectedCoupon } from "@/redux/features/couponSlice"
import { useAppSelector } from "@/redux/hooks"

const useCheckoutPrice = () => {
  const checkedProductList = useAppSelector(selectCheckedProductList)

  const seletedCoupon = useAppSelector(selectSelectedCoupon)

  const totalPriceOfCheckedProduct =
    accumulationOfProductsPrice(checkedProductList)

  const discountedPriceWithCoupon =
    seletedCoupon && totalPriceOfCheckedProduct
      ? priceToUseCoupon(seletedCoupon, totalPriceOfCheckedProduct)
      : 0

  const totalDeliveryFee = checkedProductList.reduce((accumulator, product) => {
    return accumulator + product.deliveryFree
  }, 0)

  return {
    totalPriceOfCheckedProduct,
    discountedPriceWithCoupon,
    totalDeliveryFee,
  }
}

export default useCheckoutPrice
