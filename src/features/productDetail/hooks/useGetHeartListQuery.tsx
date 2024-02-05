import { useSessionQuery } from "@/features/auth/signIn/hooks/useSessionQuery"
import { useFeedbackModal } from "@/features/common/hooks/useFeedbackModal"
import { productHeartAPI } from "@/features/common/models/heartAPI"
import { useQuery } from "@tanstack/react-query"

export const useGetHeartListQuery = () => {
  const { session } = useSessionQuery()
  const { showFeedbackModalWithContent } = useFeedbackModal()

  const { data, isLoading, isFetching } = useQuery(
    ["heartList"],
    () => productHeartAPI.getHeartList(session?.user.accessToken),
    {
      onError: () => {
        showFeedbackModalWithContent(
          "HEART 정보를 가져오지 못 했습니다. 오류가 계속되면 고객센터에 문의해주세요."
        )
      },
      cacheTime: 60 * 60 * 1000,
      enabled: !!session,
    }
  )

  const heartList = data ?? []

  return { heartList, isLoading, isFetching }
}
