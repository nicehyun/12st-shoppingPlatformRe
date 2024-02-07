import { useSessionQuery } from "@/features/auth/signIn/hooks/useSessionQuery"
import { deliveryInfoAPI } from "@/features/common/models/deliveryInfoAPI"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { isFeedbackError } from "../utils/error"

export const useGetDeliveryInfoQuery = () => {
  const queryClient = useQueryClient()
  const { session } = useSessionQuery()

  const { data, isLoading, isFetching } = useQuery(
    ["deliveryInfo"],
    () => deliveryInfoAPI.getDeliveryInfo(session?.user.accessToken),
    {
      onSuccess: (data) => {
        if (data?.status === 401) {
          queryClient.setQueryData(["deliveryInfo"], null)
        }
      },
      onError: () => {
        queryClient.setQueryData(["deliveryInfo"], null)
      },
      enabled: !!session,
      staleTime: 1000 * 60 * 60,
    }
  )

  const deliveryInfo = !isFeedbackError(data) && data ? data : null

  return { deliveryInfo, isLoading, isFetching }
}
