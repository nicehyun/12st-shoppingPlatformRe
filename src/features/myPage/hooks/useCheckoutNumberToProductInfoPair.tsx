import { useGetCheckoutListQuery } from "@/features/checkout/hooks/useGetCheckoutListQuery"

const useCheckoutNumberToProductInfoPair = () => {
  const { checkoutList } = useGetCheckoutListQuery()

  const checkoutNumberToCheckoutInfoPairList = checkoutList.flatMap(
    (checkoutEl) => {
      const { prductList, checkoutNumber, checkoutDate, payment } = checkoutEl
      const pairList = prductList.map((product) => ({
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
