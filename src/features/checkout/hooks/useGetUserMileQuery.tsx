import { junkOfNoMoreThanOneDigit } from "@/common/utils/price"
import useSessionQuery from "@/features/auth/signIn/hooks/useSessionQuery"
import { getUserMile } from "@/firebase/firestore/user"
import { useQuery } from "@tanstack/react-query"
import useCheckoutPrice from "./useCheckoutPrice"

export const useGetUserMileQuery = () => {
  const { sessionQuery } = useSessionQuery()
  const { totalPriceOfCheckedProduct } = useCheckoutPrice()

  const { data: userMile } = useQuery(["userMile"], () =>
    getUserMile(sessionQuery?.user.email ?? "")
  )

  const mile = userMile ?? 0

  const availableMiles = () => {
    if (totalPriceOfCheckedProduct > mile) return junkOfNoMoreThanOneDigit(mile)

    return junkOfNoMoreThanOneDigit(totalPriceOfCheckedProduct)
  }
  return { userMile, availableMiles: availableMiles() }
}
