import { useGetCheckoutListQuery } from "@/features/checkout/hooks/useGetCheckoutListQuery"

const useCheckoutNumberToProductInfoPair = () => {
  const { checkoutList } = useGetCheckoutListQuery()

  const checkoutNumberToCheckoutInfoPairList = checkoutList.flatMap(
    (checkoutEl) => {
      const { productList, checkoutNumber, checkoutDate, payment } = checkoutEl
      const pairList = productList.map((product) => ({
        product,
        checkoutNumber: checkoutNumber!,
        checkoutDate: checkoutDate!,
        payment,
      }))
      return pairList
    }
  )

  return { checkoutNumberToCheckoutInfoPairList }
}

export default useCheckoutNumberToProductInfoPair
