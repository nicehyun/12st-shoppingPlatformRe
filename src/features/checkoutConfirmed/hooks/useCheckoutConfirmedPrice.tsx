import {
  accumulationOfProductsPrice,
  priceToUseCoupon,
} from "@/features/common/utils/price"
import { useGetCheckoutListQuery } from "@/features/checkout/hooks/useGetCheckoutListQuery"

export const useCurrentCheckoutConfirmedPrice = () => {
  const { currentCheckoutList } = useGetCheckoutListQuery()

  const totalPriceOfCheckoutProduct = accumulationOfProductsPrice(
    currentCheckoutList?.productList ?? []
  )

  const totalDeliveryPrice = currentCheckoutList?.productList.reduce(
    (prevValue, curValue) =>
      prevValue + (curValue.deliveryFree, curValue.deliveryFree),
    0
  )

  const useMile = currentCheckoutList?.useMile ?? 0

  const useCoupon = currentCheckoutList?.coupon
    ? priceToUseCoupon(currentCheckoutList?.coupon, totalPriceOfCheckoutProduct)
    : 0

  return {
    totalPrice:
      totalPriceOfCheckoutProduct + totalDeliveryPrice - useMile - useCoupon,
  }
}
