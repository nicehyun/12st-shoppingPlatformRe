import useSessionQuery from "@/features/auth/signIn/hooks/useSessionQuery"
import { useQuery } from "@tanstack/react-query"
import { userInfoAPI } from "@/features/common/models/userInfoAPI"

export const useGetUserInfoQuery = () => {
  const { sessionQuery } = useSessionQuery()

  const {
    data: userInfo,
    isError,
    isLoading,
  } = useQuery(
    ["userInfo"],
    () => userInfoAPI.getUserInfo(sessionQuery?.user.accessToken),
    {
      enabled: !!sessionQuery,
    }
  )

  return {
    userInfo,
    isError,
    isLoading,
  }
}
