import useSessionQuery from "@/features/auth/signIn/hooks/useSessionQuery"
import { productHeartAPI } from "@/features/common/models/heartAPI"
import { useQuery } from "@tanstack/react-query"

// 로그인 안돼있을 경우 api 요청 ㄴㄴ
export const useGetHeartListQuery = () => {
  const { sessionQuery } = useSessionQuery()

  const { data, isLoading } = useQuery(
    ["heartList"],
    () => productHeartAPI.getHeartList(sessionQuery?.user.accessToken ?? ""),
    {
      enabled: !!sessionQuery,
    }
  )

  const heartList = data?.heartList ?? []
  return { heartList, isLoading }
}
