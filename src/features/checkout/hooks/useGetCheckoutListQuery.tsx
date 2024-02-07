import { CheckoutList } from "@/features/checkout/types/checkout"

import { useQuery } from "@tanstack/react-query"
import { checkoutAPI } from "../models/checkoutAPI"
import { useSessionQuery } from "@/features/auth/signIn/hooks/useSessionQuery"

export const useGetCheckoutListQuery = () => {
  const { session } = useSessionQuery()

  const { data, isLoading, isFetching } = useQuery(
    ["checkoutList"],
    () => checkoutAPI.getCheckoutList(session?.user.accessToken),
    {
      enabled: !!session,
    }
  )
  const checkoutList: CheckoutList[] = (data ?? []) as CheckoutList[]

  const currentCheckoutList = checkoutList[0]

  const isInitialLoading = isLoading && isFetching

  return { checkoutList, currentCheckoutList, isInitialLoading }
}
