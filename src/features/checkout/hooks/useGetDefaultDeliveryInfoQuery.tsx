import { addressAPI } from "@/features/common/models/deliveryInfo"
import useSessionQuery from "@/features/auth/signIn/hooks/useSessionQuery"
import { useQuery } from "@tanstack/react-query"

export const useGetDefaultDeliveryInfoQuery = () => {
  const { sessionQuery } = useSessionQuery()

  const { data: deliveryInfo } = useQuery(
    ["deliveryInfo"],
    () => addressAPI.getDeliveryInfo(sessionQuery?.user.accessToken),
    {
      enabled: !!sessionQuery,
    }
  )

  return { deliveryInfo }
}
