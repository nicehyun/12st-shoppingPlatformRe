import { useQuery } from "@tanstack/react-query"
import { getSession, useSession } from "next-auth/react"

export const useSessionQuery = () => {
  const { data } = useSession()

  const {
    data: session,
    isError: isSessionCheckError,
    isLoading: isSessionCheckLoading,
    isFetching,
  } = useQuery(["session"], () => getSession(), {
    enabled: !!data,
    refetchInterval: 1000 * 60,
    refetchOnWindowFocus: true,
  })

  return { session, isSessionCheckError, isSessionCheckLoading, isFetching }
}
