import { addressAPI } from "@/common/models/addressAPI"
import useSessionQuery from "@/features/auth/signIn/hooks/useSessionQuery"
import { useQuery } from "@tanstack/react-query"

export const useGetAddressQuery = () => {
  const { sessionQuery } = useSessionQuery()

  const { data: userDefalutAddress } = useQuery(
    ["userDefaultAddress"],
    () => addressAPI.getUserDefaultDeliveryInfo(sessionQuery?.user.email ?? ""),
    {
      // suspense: true,
      enabled: !!sessionQuery,
    }
  )

  return { userDefalutAddress: userDefalutAddress ?? null }
}
