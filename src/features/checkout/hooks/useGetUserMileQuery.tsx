import { mileAPI } from "@/features/common/models/mileAPI"
import { junkOfNoMoreThanOneDigit } from "@/features/common/utils/price"
import { useQuery } from "@tanstack/react-query"
import useCheckoutPrice from "./useCheckoutPrice"
import { useSessionQuery } from "@/features/auth/signIn/hooks/useSessionQuery"

export const useUserMileQuery = () => {
  const { session } = useSessionQuery()
  const { totalPriceOfCheckedProduct } = useCheckoutPrice()

  const {
    data: userMile,
    isLoading,
    isFetching,
  } = useQuery(
    ["userMile"],
    () => mileAPI.getUserMile(session?.user.accessToken),
    {
      enabled: !!session,
    }
  )

  const mile = userMile ?? 0

  const availableMiles = () => {
    if (totalPriceOfCheckedProduct > mile) return junkOfNoMoreThanOneDigit(mile)

    return junkOfNoMoreThanOneDigit(totalPriceOfCheckedProduct)
  }

  const isInitialLoading = isLoading && isFetching
  return { userMile, availableMiles: availableMiles(), isInitialLoading }
}
