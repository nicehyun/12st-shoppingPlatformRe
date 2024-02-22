import {
  accumulationOfProductsPrice,
  priceToUseCoupon,
} from "@/features/common/utils/price"
import { useGetCheckoutListQuery } from "@/features/checkout/hooks/useGetCheckoutListQuery"

export const useRecentCheckoutInfo = () => {
  const { checkoutList, isLoading } = useGetCheckoutListQuery()

  const recentCheckoutInfo = checkoutList[0] ?? null

  if (!recentCheckoutInfo) {
    return { isLoading, recentCheckoutInfo, totalPrice: 0 }
  }

  const totalPriceOfCheckoutProduct = accumulationOfProductsPrice(
    recentCheckoutInfo.productList
  )

  const totalDeliveryFee = recentCheckoutInfo?.productList.reduce(
    (accumulator, product) => accumulator + product.deliveryFree,
    0
  )

  const useMile = recentCheckoutInfo.useMile

  const useCoupon = recentCheckoutInfo.coupon
    ? priceToUseCoupon(recentCheckoutInfo.coupon, totalPriceOfCheckoutProduct)
    : 0

  return {
    isLoading,
    recentCheckoutInfo,
    totalPrice:
      totalPriceOfCheckoutProduct + totalDeliveryFee - useMile - useCoupon,
  }
}
