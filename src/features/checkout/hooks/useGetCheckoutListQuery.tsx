import { CheckoutList } from "@/common/types/checkout"
import useSessionQuery from "@/features/auth/signIn/hooks/useSessionQuery"
import { getCheckoutList } from "@/firebase/firestore/checkout"
import { useQuery } from "@tanstack/react-query"

export const useGetCheckoutListQuery = () => {
  const { sessionQuery } = useSessionQuery()

  const { data } = useQuery(
    ["checkoutList"],
    () => getCheckoutList(sessionQuery?.user.email ?? ""),
    {
      enabled: !!sessionQuery,
      // suspense: true,
    }
  )
  const checkoutList: CheckoutList[] = data ?? []

  const currentCheckoutList = checkoutList[0]

  return { checkoutList, currentCheckoutList }
}
