import { useQuery } from "@tanstack/react-query"

import { getSession } from "next-auth/react"

// TODO : 세션 쿼리에 정보 없음.
const useSessionQuery = () => {
  const {
    data: sessionQuery,
    isError: isSessionCheckError,
    isLoading: isSessionCheckLoading,
  } = useQuery(["session"], () => getSession(), {
    refetchInterval: 30 * 60 * 1000,
  })

  // console.log(sessionQuery)

  return { sessionQuery, isSessionCheckError, isSessionCheckLoading }
}

export default useSessionQuery
