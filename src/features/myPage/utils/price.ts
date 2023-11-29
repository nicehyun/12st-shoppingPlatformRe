import { CheckoutList } from "@/features/common/types/checkout"
import {
  accumulationOfProductsPrice,
  priceToUseCoupon,
} from "@/features/common/utils/price"

export const checkoutTotalPrice = (checkoutList: CheckoutList) => {
  const totalPrice = accumulationOfProductsPrice(checkoutList.productList)

  const usedCouponPrice = checkoutList.coupon
    ? priceToUseCoupon(checkoutList.coupon, totalPrice)
    : 0

  const usedMile = checkoutList.useMile

  return totalPrice - usedCouponPrice - usedMile
}
