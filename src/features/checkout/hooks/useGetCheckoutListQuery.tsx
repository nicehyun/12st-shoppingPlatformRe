import { CheckoutList } from "@/common/types/checkout"
import useSessionQuery from "@/features/auth/signIn/hooks/useSessionQuery"
import { useQuery } from "@tanstack/react-query"
import { checkoutAPI } from "../models/checkoutAPI"

export const useGetCheckoutListQuery = () => {
  const { sessionQuery } = useSessionQuery()

  const { data, isLoading } = useQuery(
    ["checkoutList"],
    () => checkoutAPI.getCheckoutList(sessionQuery?.user.email ?? ""),
    {
      enabled: !!sessionQuery,
      suspense: true,
    }
  )
  const checkoutList: CheckoutList[] = data ?? []

  const currentCheckoutList = checkoutList[0]

  return { checkoutList, currentCheckoutList, isLoading }
}
