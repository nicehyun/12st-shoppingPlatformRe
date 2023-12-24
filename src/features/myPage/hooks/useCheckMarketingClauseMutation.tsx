import useSessionQuery from "@/features/auth/signIn/hooks/useSessionQuery"
import { showFeedbackModal } from "@/redux/features/modalSlice"
import { useAppDispatch } from "@/redux/hooks"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { myPageAPI } from "../models/myPageAPI"

const useCheckMarketingClauseMutation = () => {
  const { sessionQuery } = useSessionQuery()
  const queryClient = useQueryClient()

  const dispatch = useAppDispatch()

  const checkMarketingClauseMutaion = useMutation(
    (isChecked: boolean) =>
      myPageAPI.modificatieMarketingClause(
        isChecked,
        sessionQuery?.user.accessToken
      ),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["userInfo"])
      },
      onError: () =>
        dispatch(
          showFeedbackModal({
            modalContent:
              "다시 한번 시도해주세요. 오류가 계속되면 고객센터에 문의해주세요.",
          })
        ),
    }
  )

  return checkMarketingClauseMutaion
}

export default useCheckMarketingClauseMutation
