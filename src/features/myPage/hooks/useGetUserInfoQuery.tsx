import useSessionQuery from "@/features/auth/signIn/hooks/useSessionQuery"
import { useQuery } from "@tanstack/react-query"
import { myPageAPI } from "../models/myPageAPI"

export const useGetUserInfoQuery = () => {
  const { sessionQuery, isSessionCheckLoading } = useSessionQuery()

  const {
    data: userInfo,
    isError,
    isLoading,
  } = useQuery(
    ["userInfo"],
    () => myPageAPI.getUserInfo(sessionQuery?.user.email ?? ""),
    {
      suspense: true,
      enabled: !!sessionQuery && isSessionCheckLoading,
    }
  )

  return {
    userInfo,
    isError,
    isLoading,
  }
}
