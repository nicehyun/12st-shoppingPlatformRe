import useSessionQuery from "@/features/auth/signIn/hooks/useSessionQuery"
import { productHeartAPI } from "@/features/common/models/heartAPI"
import { showFeedbackModal } from "@/redux/features/modalSlice"
import { useAppDispatch } from "@/redux/hooks"
import { useQuery } from "@tanstack/react-query"

export const useGetHeartListQuery = () => {
  const { sessionQuery } = useSessionQuery()
  const dispatch = useAppDispatch()

  const { data, isLoading } = useQuery(
    ["heartList"],
    () => productHeartAPI.getHeartList(sessionQuery?.user.accessToken ?? ""),
    {
      onError: () =>
        dispatch(
          showFeedbackModal({
            modalContent:
              "상품 정보를 가져오지 못 했습니다. 오류가 계속되면 고객센터에 문의해주세요.",
          })
        ),
      staleTime: 60 * 60 * 1000,
      enabled: !!sessionQuery,
    }
  )

  const heartList = data?.heartList ?? []
  return { heartList, isLoading }
}
