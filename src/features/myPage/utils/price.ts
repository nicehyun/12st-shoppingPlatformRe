import { CheckoutList } from "@/common/types/checkout"
import {
  accumulationOfProductsPrice,
  priceToUseCoupon,
} from "@/common/utils/price"

export const checkoutTotalPrice = (checkoutList: CheckoutList) => {
  const totalPrice = accumulationOfProductsPrice(checkoutList.prductList)

  const usedCouponPrice = checkoutList.coupon
    ? priceToUseCoupon(checkoutList.coupon, totalPrice)
    : 0

  const usedMile = checkoutList.useMile

  return totalPrice - usedCouponPrice - usedMile
}
