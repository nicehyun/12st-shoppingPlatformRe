import { useQuery } from "@tanstack/react-query"

import { getSession } from "next-auth/react"

const useSessionQuery = () => {
  const {
    data: sessionQuery,
    isError: isSessionCheckError,
    isLoading: isSessionCheckLoading,
  } = useQuery(["session"], () => getSession(), {
    refetchInterval: 300000, // 5분마다 세션 체크
  })

  return { sessionQuery, isSessionCheckError, isSessionCheckLoading }
}

export default useSessionQuery
