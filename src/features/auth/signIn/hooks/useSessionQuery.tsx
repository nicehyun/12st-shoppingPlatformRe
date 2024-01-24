import { useQuery } from "@tanstack/react-query"
import { getSession, useSession } from "next-auth/react"

export const useSessionQuery = () => {
  const { data } = useSession()
  let staleTime = 0

  if (data) {
    const currentTime = Date.now()
    const expiresTime = new Date(data.expires).getTime()
    staleTime = expiresTime - currentTime
  }

  const {
    data: session,
    isError: isSessionCheckError,
    isLoading: isSessionCheckLoading,
    isStale,
  } = useQuery(["session"], () => getSession(), {
    enabled: !!data,
    staleTime: staleTime > 0 ? staleTime : 0,
  })

  return { session, isSessionCheckError, isSessionCheckLoading }
}
