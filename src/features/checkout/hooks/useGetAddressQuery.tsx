import useSessionQuery from "@/features/auth/signIn/hooks/useSessionQuery"
import { getUserDefaultDeliveryInfo } from "@/firebase/firestore/address"
import { useQuery } from "@tanstack/react-query"

export const useGetAddressQuery = () => {
  const { sessionQuery } = useSessionQuery()

  const { data: userDefalutAddress } = useQuery(
    ["userDefaultAddress"],
    () => getUserDefaultDeliveryInfo(sessionQuery?.user.email ?? ""),
    {
      suspense: true,
    }
  )

  return { userDefalutAddress: userDefalutAddress ?? null }
}
