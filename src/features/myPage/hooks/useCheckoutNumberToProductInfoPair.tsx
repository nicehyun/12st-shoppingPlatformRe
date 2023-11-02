import { useGetCheckoutListQuery } from "@/features/checkout/hooks/useGetCheckoutListQuery"

const useCheckoutNumberToProductInfoPair = () => {
  const { checkoutList, isLoading } = useGetCheckoutListQuery()

  const checkoutNumberToProductInfoPairList = checkoutList.flatMap(
    (checkoutEl) => {
      const { prductList, checkoutNumber, checkoutDate } = checkoutEl
      const pairList = prductList.map((product) => ({
        product,
        checkoutNumber,
        checkoutDate,
      }))
      return pairList
    }
  )

  return { checkoutNumberToProductInfoPairList }
}

export default useCheckoutNumberToProductInfoPair
