import useSessionQuery from "@/features/auth/signIn/hooks/useSessionQuery"
import { useQuery } from "@tanstack/react-query"
import { userInfoAPI } from "@/features/common/models/userInfoAPI"

export const useGetUserInfoQuery = () => {
  const { sessionQuery } = useSessionQuery()

  const {
    data: userInfo,
    isError,
    isLoading,
    isFetching,
  } = useQuery(
    ["userInfo"],
    () => userInfoAPI.getUserInfo(sessionQuery?.user.accessToken),
    {
      enabled: !!sessionQuery,
    }
  )

  const isInitialLoading = isLoading && isFetching

  return {
    userInfo,
    isError,
    isInitialLoading,
  }
}
