import { useQuery, useQueryClient } from "@tanstack/react-query"
import { userInfoAPI } from "@/features/common/models/userInfoAPI"
import { useSessionQuery } from "@/features/auth/signIn/hooks/useSessionQuery"
import { isFeedbackError } from "@/features/common/utils/error"

export const useGetUserInfoQuery = () => {
  const { session } = useSessionQuery()
  const queryClient = useQueryClient()

  const { data, isLoading, isFetching } = useQuery(
    ["userInfo"],
    () => userInfoAPI.getUserInfo(session?.user.accessToken),
    {
      onSuccess: (data) => {
        if (isFeedbackError(data)) {
          queryClient.setQueryData(["userInfo"], null)
          return
        }
      },
      onError: () => {
        queryClient.setQueryData(["userInfo"], null)
      },
      enabled: !!session,
      staleTime: 1000 * 60 * 60,
    }
  )

  const userInfo = !isFeedbackError(data) && data ? data : null

  return {
    userInfo,
    isLoading,
    isFetching,
  }
}
