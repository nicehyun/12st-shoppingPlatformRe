import { useQuery } from "@tanstack/react-query"
import { userInfoAPI } from "@/features/common/models/userInfoAPI"
import { useSessionQuery } from "@/features/auth/signIn/hooks/useSessionQuery"

export const useGetUserInfoQuery = () => {
  const { session } = useSessionQuery()

  const {
    data: userInfo,
    isError,
    isLoading,
    isFetching,
  } = useQuery(
    ["userInfo"],
    () => userInfoAPI.getUserInfo(session?.user.accessToken),
    {
      enabled: !!session,
    }
  )

  const isInitialLoading = isLoading && isFetching

  return {
    userInfo,
    isError,
    isInitialLoading,
  }
}
