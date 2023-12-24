import { CheckoutList } from "@/features/checkout/types/checkout"
import useSessionQuery from "@/features/auth/signIn/hooks/useSessionQuery"
import { useQuery } from "@tanstack/react-query"
import { checkoutAPI } from "../models/checkoutAPI"

export const useGetCheckoutListQuery = () => {
  const { sessionQuery } = useSessionQuery()

  const { data, isLoading } = useQuery(
    ["checkoutList"],
    () => checkoutAPI.getCheckoutList(sessionQuery?.user.accessToken),
    {
      enabled: !!sessionQuery,
    }
  )
  const checkoutList: CheckoutList[] = (data ?? []) as CheckoutList[]

  const currentCheckoutList = checkoutList[0]

  return { checkoutList, currentCheckoutList, isLoading }
}
