import {
  accumulationOfProductsPrice,
  priceToUseCoupon,
} from "@/features/common/utils/price"
import { selectCheckoutPendingProductListState } from "@/redux/features/checkoutSlice"
import { selectSelectedCoupon } from "@/redux/features/couponSlice"
import { useAppSelector } from "@/redux/hooks"

const useCheckoutPrice = () => {
  const checkoutPendingProductList = useAppSelector(
    selectCheckoutPendingProductListState
  )

  const seletedCoupon = useAppSelector(selectSelectedCoupon)

  const totalPriceOfCheckedProduct = accumulationOfProductsPrice(
    checkoutPendingProductList
  )

  const discountedPriceWithCoupon =
    seletedCoupon && totalPriceOfCheckedProduct
      ? priceToUseCoupon(seletedCoupon, totalPriceOfCheckedProduct)
      : 0

  const totalDeliveryFee = checkoutPendingProductList.reduce(
    (accumulator, product) => {
      return accumulator + product.deliveryFree
    },
    0
  )

  const calculatingDiscountPerProduct = () => {
    const discountPerProduct =
      Math.floor(
        discountedPriceWithCoupon / checkoutPendingProductList.length / 10
      ) * 10

    const remainingDiscount =
      discountedPriceWithCoupon -
      discountPerProduct * checkoutPendingProductList.length

    const discountPerProductArr = []
    for (let i = 0; i < checkoutPendingProductList.length; i++) {
      const adjustedDiscount =
        discountPerProduct + (i < remainingDiscount / 10 ? 10 : 0)
      discountPerProductArr.push(adjustedDiscount)
    }

    return discountPerProductArr
  }

  return {
    totalPriceOfCheckedProduct,
    discountedPriceWithCoupon,
    totalDeliveryFee,
    calculatedDiscountPerProductArr: calculatingDiscountPerProduct(),
  }
}

export default useCheckoutPrice
