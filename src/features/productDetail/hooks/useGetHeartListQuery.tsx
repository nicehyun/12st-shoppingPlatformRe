import useSessionQuery from "@/features/auth/signIn/hooks/useSessionQuery"
import { productHeartAPI } from "@/features/common/models/heartAPI"
import { useQuery } from "@tanstack/react-query"

export const useGetHeartListQuery = () => {
  const { sessionQuery } = useSessionQuery()
  const { data, isLoading } = useQuery(
    ["heartList"],
    () => productHeartAPI.getHeartList(sessionQuery?.user.accessToken),
    {
      enabled: !!sessionQuery,
    }
  )

  const heartList = data?.heartList ?? []
  return { heartList, isLoading }
}
