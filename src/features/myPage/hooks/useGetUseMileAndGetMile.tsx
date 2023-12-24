import { useUserMileQuery } from "@/features/checkout/hooks/useGetUserMileQuery"
import { useGetCheckoutListQuery } from "@/features/checkout/hooks/useGetCheckoutListQuery"
import { UseMileAndGetMile } from "../types/mile"
import { CheckoutList } from "@/features/checkout/types/checkout"

export const useGetUseMileAndGetMile = () => {
  const { userMile, isLoading: isGetUserMile } = useUserMileQuery()
  const { checkoutList, isLoading: isGetCheckoutList } =
    useGetCheckoutListQuery()

  const useMileAndGetMileInfo: UseMileAndGetMile[] = checkoutList.map(
    (checkoutEl: CheckoutList) => {
      const { getMile, useMile, checkoutNumber, checkoutDate } = checkoutEl
      return { getMile, useMile, checkoutNumber, checkoutDate }
    }
  )

  const totalUseMile = useMileAndGetMileInfo?.reduce(
    (prevMile, curMileInfo) => prevMile + curMileInfo.useMile,
    0
  )

  const totalGetMile = useMileAndGetMileInfo?.reduce(
    (prevMile, curMileInfo) => prevMile + curMileInfo.getMile,
    0
  )

  return {
    useMileAndGetMileInfo,
    userMile,
    totalGetMile,
    totalUseMile,
    isLoading: isGetUserMile && isGetCheckoutList,
  }
}
