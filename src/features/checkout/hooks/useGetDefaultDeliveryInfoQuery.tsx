import { deliveryInfoAPI } from "@/features/common/models/deliveryInfoAPI"
import useSessionQuery from "@/features/auth/signIn/hooks/useSessionQuery"
import { useQuery } from "@tanstack/react-query"

export const useGetDefaultDeliveryInfoQuery = () => {
  const { sessionQuery } = useSessionQuery()

  const { data: deliveryInfo, isLoading, isFetching } = useQuery(
    ["deliveryInfo"],
    () => deliveryInfoAPI.getDeliveryInfo(sessionQuery?.user.accessToken),
    {
      enabled: !!sessionQuery,
    }
  )

  const isInitialLoading = isLoading && isFetching

  return { deliveryInfo, isInitialLoading }
}
