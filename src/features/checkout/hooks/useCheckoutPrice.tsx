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
    (accumulator, product) => accumulator + product.deliveryFree,
    0
  )

  const calculateRoundedPricePerProduct = (
    price: number,
    productLength: number
  ) => {
    return Math.floor(price / productLength / 10) * 10
  }

  const checkoutPendingTotalAmout = checkoutPendingProductList.reduce(
    (accumulator, product) => {
      return accumulator + product.amount
    },
    0
  )

  const discountPerProduct = calculateRoundedPricePerProduct(
    discountedPriceWithCoupon,
    checkoutPendingTotalAmout
  )

  const remainingDiscount =
    discountedPriceWithCoupon - discountPerProduct * checkoutPendingTotalAmout

  const calculatingDiscountPerProduct = checkoutPendingProductList.map(
    (product, index) =>
      discountPerProduct * product.amount +
      (index < remainingDiscount / 10 ? 10 : 0)
  )

  return {
    totalPriceOfCheckedProduct,
    discountedPriceWithCoupon,
    totalDeliveryFee,
    calculatedDiscountPerProductArr: calculatingDiscountPerProduct,
  }
}

export default useCheckoutPrice
