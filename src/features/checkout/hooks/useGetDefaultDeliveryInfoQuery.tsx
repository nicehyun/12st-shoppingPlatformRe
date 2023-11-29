import { addressAPI } from "@/features/common/models/addressAPI"
import useSessionQuery from "@/features/auth/signIn/hooks/useSessionQuery"
import { useQuery } from "@tanstack/react-query"

export const useGetDefaultDeliveryInfoQuery = () => {
  const { sessionQuery } = useSessionQuery()

  const { data: userDefalutAddress } = useQuery(
    ["userDefaultDeliveryInfo"],
    () => addressAPI.getUserDefaultDeliveryInfo(sessionQuery?.user.email ?? ""),
    {
      // suspense: true,
      enabled: !!sessionQuery,
    }
  )

  return { userDefalutDeliveryInfo: userDefalutAddress ?? null }
}
