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

  const calculatingDiscountPerProduct = () => {
    const discountPerProduct =
      Math.floor(discountedPriceWithCoupon / checkedProductList.length / 10) *
      10

    const remainingDiscount =
      discountedPriceWithCoupon - discountPerProduct * checkedProductList.length

    const discountPerProductArr = []
    for (let i = 0; i < checkedProductList.length; i++) {
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
