import { useSessionQuery } from "@/features/auth/signIn/hooks/useSessionQuery"
import { deliveryInfoAPI } from "@/features/common/models/deliveryInfoAPI"
import { useQuery } from "@tanstack/react-query"

export const useGetDefaultDeliveryInfoQuery = () => {
  const { session } = useSessionQuery()

  const {
    data: deliveryInfo,
    isLoading,
    isFetching,
  } = useQuery(
    ["deliveryInfo"],
    () => deliveryInfoAPI.getDeliveryInfo(session?.user.accessToken),
    {
      enabled: !!session,
    }
  )

  const isInitialLoading = isLoading && isFetching

  return { deliveryInfo, isInitialLoading }
}
