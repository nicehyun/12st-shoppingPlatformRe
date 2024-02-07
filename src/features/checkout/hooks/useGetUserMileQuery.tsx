import { mileAPI } from "@/features/common/models/mileAPI"
import { junkOfNoMoreThanOneDigit } from "@/features/common/utils/price"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import useCheckoutPrice from "./useCheckoutPrice"
import { useSessionQuery } from "@/features/auth/signIn/hooks/useSessionQuery"
import { isFeedbackError } from "@/features/common/utils/error"

export const useUserMileQuery = () => {
  const queryClient = useQueryClient()
  const { session } = useSessionQuery()
  const { totalPriceOfCheckedProduct } = useCheckoutPrice()

  const { data, isLoading } = useQuery(
    ["userMile"],
    () => mileAPI.getUserMile(session?.user.accessToken),
    {
      onSuccess: (data) => {
        if (isFeedbackError(data)) {
          queryClient.setQueryData(["userMile"], null)
        }
      },
      onError: () => {
        queryClient.setQueryData(["userMile"], null)
      },
      enabled: !!session,
      staleTime: 1000 * 60 * 60,
    }
  )

  const userMile = !isFeedbackError(data) && data ? data : 0

  const availableMiles = () => {
    if (totalPriceOfCheckedProduct > userMile)
      return junkOfNoMoreThanOneDigit(userMile)

    return junkOfNoMoreThanOneDigit(totalPriceOfCheckedProduct)
  }

  return { userMile, availableMiles: availableMiles(), isLoading }
}
