import { mileAPI } from "@/features/common/models/mileAPI"
import { junkOfNoMoreThanOneDigit } from "@/features/common/utils/price"
import useSessionQuery from "@/features/auth/signIn/hooks/useSessionQuery"
import { useQuery } from "@tanstack/react-query"
import useCheckoutPrice from "./useCheckoutPrice"

export const useUserMileQuery = () => {
  const { sessionQuery } = useSessionQuery()
  const { totalPriceOfCheckedProduct } = useCheckoutPrice()

  const { data: userMile, isLoading } = useQuery(
    ["userMile"],
    () => mileAPI.getUserMile(sessionQuery?.user.accessToken),
    {
      enabled: !!sessionQuery,
    }
  )

  const mile = userMile ?? 0

  const availableMiles = () => {
    if (totalPriceOfCheckedProduct > mile) return junkOfNoMoreThanOneDigit(mile)

    return junkOfNoMoreThanOneDigit(totalPriceOfCheckedProduct)
  }
  return { userMile, availableMiles: availableMiles(), isLoading }
}
