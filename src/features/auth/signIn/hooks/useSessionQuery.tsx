import { useQuery } from "@tanstack/react-query"

import { getSession } from "next-auth/react"

const useSessionQuery = () => {
  const {
    data: sessionQuery,
    isError: isSessionCheckError,
    isLoading: isSessionCheckLoading,
  } = useQuery(["session"], () => getSession(), {
    refetchInterval: 30 * 60 * 1000,
  })

  return { sessionQuery, isSessionCheckError, isSessionCheckLoading }
}

export default useSessionQuery
