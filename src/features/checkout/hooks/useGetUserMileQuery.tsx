import { junkOfNoMoreThanOneDigit } from "@/common/utils/price"
import useSessionQuery from "@/features/auth/signIn/hooks/useSessionQuery"
import { getUserMile } from "@/firebase/firestore/user"
import { useQuery } from "@tanstack/react-query"

export const useGetUserMileQuery = () => {
  const { sessionQuery } = useSessionQuery()
  const { data: userMile } = useQuery(["userMile"], () =>
    getUserMile(sessionQuery?.user.email ?? "")
  )

  const availableMiles = junkOfNoMoreThanOneDigit(userMile ?? 0)
  return { userMile, availableMiles }
}
